import { z } from "zod";
import React, { useState, useEffect } from "react";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

import {
  LocationFormProvider,
  useLocationForm,
} from "~/createShop/location-form-context";
import { zodResolver } from "@mantine/form";

import { errorCode } from "~/common/constants";

import { Group, Button, Grid } from "@mantine/core";
import { IconMapSearch } from "@tabler/icons-react";

import CircleProgress from "@/common/RingProgress/CircleProgress";
import Location from "~/createShop/Location";
import LocationForm from "~/createShop/LocationForm";

const schema = z.object({
  buildingNo: z.string().min(1, { message: errorCode.REQUIRED.message }),
  streetAddress: z.string().min(1, { message: errorCode.REQUIRED.message }),
  town: z.string().min(1, { message: errorCode.REQUIRED.message }),
  postcode: z.string().min(1, { message: errorCode.REQUIRED.message }),
  city: z.string().min(1, { message: errorCode.REQUIRED.message }),
  state: z.string().min(1, { message: errorCode.REQUIRED.message }),
});

function LocationView() {
  const { mutate, data, isSuccess } = api.shop.updateLocation.useMutation();
  const [marker, setMarker] = useState({ lat: 0, lng: 0 });
  const [isConfirm, setConfirm] = useState(false);
  const router = useRouter();
  const { newShop } = router.query;

  // Create form as described in use-form documentation
  const form = useLocationForm({
    initialValues: {
      buildingNo: "",
      buildingName: "",
      streetAddress: "",
      streetAddressLine2: "",
      town: "",
      postcode: "",
      city: "",
      state: "",
    },

    validate: zodResolver(schema),
  });

  useEffect(() => {
    if (data) {
      void router.push(`/open-a-shop/${data.id}/catch-the-eye`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <div>
      <LocationFormProvider form={form}>
        <form
          onSubmit={form.onSubmit((values) =>
            mutate({
              id: newShop && typeof newShop === "string" ? newShop : "",
              lat: marker.lat,
              lng: marker.lng,
              buildingNumber: values.buildingNo,
              buildingName: values.buildingName,
              addressLine1: values.streetAddress,
              addressLine2: values.streetAddressLine2,
              addressTown: values.town,
              addressCity: values.city,
              addressState: values.state,
              addressPostalCode: values.postcode,
            })
          )}
        >
          <Group position="right" className="lg:max-w-[82.8%]">
            <CircleProgress value={20}>
              <IconMapSearch size={22} />
            </CircleProgress>
          </Group>

          {isConfirm ? (
            <Grid className="flex max-h-[80vh] min-h-[70vh] max-w-[100vw] items-center justify-center">
              <Grid.Col xs={4}>
                <Location
                  isConfirm={isConfirm}
                  marker={marker}
                  setMarker={setMarker}
                />
              </Grid.Col>
              <Grid.Col xs={4}>
                <LocationForm marker={marker} />
              </Grid.Col>
            </Grid>
          ) : (
            <Location
              isConfirm={isConfirm}
              marker={marker}
              setMarker={setMarker}
            />
          )}

          {!isConfirm ? (
            <Group position="right" className="mt-5 lg:max-w-[82%]">
              <Button
                type="button"
                disabled={marker.lat === 0 && marker.lng === 0}
                onClick={() => {
                  setConfirm(true);
                }}
              >
                Next step
              </Button>
            </Group>
          ) : (
            <Group position="right" className="mt-auto lg:max-w-[82%]">
              <Button type="submit">Next step</Button>
            </Group>
          )}
        </form>
      </LocationFormProvider>
    </div>
  );
}

export default LocationView;

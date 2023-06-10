import { z } from "zod";
import React from "react";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { useForm, zodResolver } from "@mantine/form";

import { Text, Title, Grid, Button, Group } from "@mantine/core";
import InputField from "@/common/InputField/InputField";
import { errorCode } from "~/common/constants/errorCode";

type LocationFormProps = {
  marker: {
    lat: number;
    lng: number;
  };
};

const schema = z.object({
  buildingNo: z.string().min(1, { message: errorCode.REQUIRED.message }),
  streetAddress: z.string().min(1, { message: errorCode.REQUIRED.message }),
  town: z.string().min(1, { message: errorCode.REQUIRED.message }),
  postcode: z.string().min(1, { message: errorCode.REQUIRED.message }),
  city: z.string().min(1, { message: errorCode.REQUIRED.message }),
  state: z.string().min(1, { message: errorCode.REQUIRED.message }),
});

const LocationForm: React.FunctionComponent<LocationFormProps> = (props) => {
  //   const [address, setAddress] = useState([]);
  const { mutate } = api.shop.updateLocation.useMutation();
  const router = useRouter();
  const { newShop } = router.query;

  const form = useForm({
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

  //   DEV NOTE: Require parses as this can be random algorithm
  //   const geocoder = new google.maps.Geocoder();
  //   useMemo(() => {
  //     geocoder
  //       .geocode({ location: { lat: props.marker.lat, lng: props.marker.lng } })
  //       .then((response) => {
  //         if (response.results[0]) {
  //           setAddress(response.results[0].address_components);
  //         } else {
  //           window.alert("No results found");
  //         }
  //       })
  //       .catch((e) => console.log("failed"));

  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [props.marker.lat, props.marker.lng]);

  return (
    <div>
      <Grid.Col xs={12}>
        <form
          onSubmit={form.onSubmit((values) =>
            mutate({
              id: newShop && typeof newShop === "string" ? newShop : "",
              lat: props.marker.lat,
              lng: props.marker.lng,
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
          <Title order={1} lineClamp={3}>
            <Text span c="blue" inherit>
              Confirm
            </Text>{" "}
            your address.
          </Title>

          <InputField
            label="House, lot, apt, etc"
            placeholder=""
            {...form.getInputProps("buildingNo")}
          />
          <InputField
            label="Buiding Name (if applicable)"
            placeholder=""
            {...form.getInputProps("buildingName")}
          />
          <InputField
            label="Street Address"
            placeholder=""
            {...form.getInputProps("streetAddress")}
          />
          <InputField
            label="Street Address Line 2"
            placeholder=""
            {...form.getInputProps("streetAddressLine2")}
          />
          <InputField
            label="Town / Neighborhood"
            placeholder=""
            {...form.getInputProps("town")}
          />
          <InputField
            label="Postcode"
            placeholder=""
            {...form.getInputProps("postcode")}
          />
          <InputField
            label="City"
            placeholder=""
            {...form.getInputProps("city")}
          />
          <InputField
            label="State"
            placeholder=""
            {...form.getInputProps("state")}
          />

          {/*DEV NOTE: Gonna go with this one first to avoid headache*/}
          <Group position="right" className="mt-auto">
            <Button type="submit">Next step</Button>
          </Group>
        </form>
      </Grid.Col>
    </div>
  );
};

export default LocationForm;

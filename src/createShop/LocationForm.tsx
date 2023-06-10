import React, { useMemo } from "react";

import { useLocationFormContext } from "./location-form-context";

import { Text, Title, Grid } from "@mantine/core";
import InputField from "@/common/InputField/InputField";

type LocationFormProps = {
  marker: {
    lat: number;
    lng: number;
  };
};

const LocationForm: React.FunctionComponent<LocationFormProps> = (props) => {
  const form = useLocationFormContext();
  const geocoder = new google.maps.Geocoder();

  useMemo(() => {
    geocoder
      .geocode({ location: { lat: props.marker.lat, lng: props.marker.lng } })
      .then((response) => {
        if (response.results[0]) {
          const addresses = response.results[0].address_components;
          const addressesLength = addresses.length - 1;

          // DEV NOTE: The last 4 index will always give the same
          // At least 4 array will be given
          form.setFieldValue(
            "postcode",
            addresses[addressesLength]?.short_name || ""
          );

          form.setFieldValue(
            "state",
            addresses[addressesLength - 2]?.short_name || ""
          );

          form.setFieldValue(
            "city",
            addresses[addressesLength - 3]?.short_name || ""
          );
        } else {
          window.alert("No results found");
        }
      })
      .catch((error) => console.log("Failed", error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.marker.lat, props.marker.lng]);

  return (
    <div>
      <Grid.Col xs={12}>
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
      </Grid.Col>
    </div>
  );
};

export default LocationForm;

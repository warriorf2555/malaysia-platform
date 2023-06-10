// form-context.ts file
import { createFormContext } from "@mantine/form";

interface LocationFormValues {
  buildingNo: string;
  buildingName: string;
  streetAddress: string;
  streetAddressLine2: string;
  town: string;
  postcode: string;
  city: string;
  state: string;
}

// You can give context variables any name
export const [LocationFormProvider, useLocationFormContext, useLocationForm] =
  createFormContext<LocationFormValues>();

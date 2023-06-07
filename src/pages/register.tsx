import React from "react";
import InputField from "@/common/InputField/InputField";

import { Button, Container, Grid, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

function Register() {
  const form = useForm({
    initialValues: {
      firstName: "",
      termsOfService: false,
    },

    validate: {
      firstName: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Container my="md">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        {/* Business Owner */}
        <Grid className="mt-[12px]">
          <Grid.Col xs={4} className="flex items-center justify-center">
            <Title className="text-lg">
              Business Owner<span className="text-red-500">*</span>
            </Title>
          </Grid.Col>

          <Grid.Col xs={4}>
            <InputField
              label="First Name"
              placeholder=""
              {...form.getInputProps("firstName")}
            />
          </Grid.Col>

          <Grid.Col xs={4}>
            <InputField label="Last Name" placeholder="" />
          </Grid.Col>
        </Grid>

        {/* Business Name */}
        <Grid className="mt-[24px]">
          <Grid.Col xs={4} className="flex items-center justify-center">
            <Title className="text-lg">
              Business Name<span className="text-red-500">*</span>
            </Title>
          </Grid.Col>
          <Grid.Col xs={8}>
            <InputField label="" placeholder="" />
          </Grid.Col>
        </Grid>

        <Grid className="mt-[24px]">
          <Grid.Col xs={4} className="flex items-center justify-center">
            <Title className="text-lg">
              Contact Number<span className="text-red-500">*</span>
            </Title>
          </Grid.Col>
          <Grid.Col xs={8}>
            <InputField label="" placeholder="" />
          </Grid.Col>
        </Grid>

        {/* Street Address 1 */}
        <Grid className="mt-[24px]">
          <Grid.Col xs={4} className="flex items-center justify-center">
            <Title className="text-lg">
              Address<span className="text-red-500">*</span>
            </Title>
          </Grid.Col>
          <Grid.Col xs={8}>
            <InputField label="Street Address" placeholder="" />
          </Grid.Col>
        </Grid>

        {/* Street Address 2 */}
        <Grid className="mt-[12px]">
          <Grid.Col xs={4} className="flex items-center justify-center" />
          <Grid.Col xs={8}>
            <InputField label="Street Address Line 2" placeholder="" />
          </Grid.Col>
        </Grid>

        {/* City / State / Province */}
        <Grid className="mt-[12px]">
          <Grid.Col xs={4} className="flex items-center justify-center" />

          <Grid.Col xs={4}>
            <InputField label="City" placeholder="" />
          </Grid.Col>

          <Grid.Col xs={4}>
            <InputField label="State / Province" placeholder="" />
          </Grid.Col>
        </Grid>

        {/* Street Address 2 */}
        <Grid className="mt-[12px]">
          <Grid.Col xs={4} className="flex items-center justify-center" />
          <Grid.Col xs={8}>
            <InputField label="Postal / Zip Code" placeholder="" />
          </Grid.Col>
        </Grid>

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}

export default Register;

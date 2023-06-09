import React from "react";

import { Text, Title, Grid } from "@mantine/core";
import GradientCard from "@/common/GradientCard/GradientCard";

function Overview() {
  return (
    <div className="flex min-h-[73vh] items-center justify-center">
      <Grid>
        <Grid.Col xs={12}>
          <Title order={1}>
            It is easier to{" "}
            <Text span c="blue" inherit>
              market
            </Text>{" "}
            your shop
          </Title>
        </Grid.Col>
        <Grid.Col xs={12}>
          <GradientCard
            title="1. Tell us what you provide."
            description="Share some basic info like location of the shop"
          />
          <GradientCard
            title="2. Make it stand out."
            description="Provide at least 5 photos to make your shop stand out!"
          />
          <GradientCard
            title="3. Finish up"
            description="Publish your listing and let the customer knows."
          />
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Overview;

import React from "react";

import { Text, Title, Grid } from "@mantine/core";

import StandOut from "@/images/StandOut.png";
import Image from "next/image";

function CatchTheEyeShowcase() {
  return (
    <div className="flex min-h-[68vh] items-center justify-center">
      <Grid align="center">
        <Grid.Col xs={12} className="text-center">
          <Title order={1}>
            2. Make your shop{" "}
            <Text span c="blue" inherit>
              stand out!
            </Text>
          </Title>
          <Image src={StandOut} alt="Catch The Eye" width={600} height={600} />
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default CatchTheEyeShowcase;

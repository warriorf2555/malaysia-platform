import React, { type ReactNode } from "react";

import { ThemeIcon, RingProgress, Center } from "@mantine/core";

type CircleProgressProps = {
  value: number;
  children: ReactNode;
};

const CircleProgress: React.FunctionComponent<CircleProgressProps> = (
  props
) => {
  return (
    <RingProgress
      sections={[{ value: props.value, color: "blue" }]}
      label={
        <Center>
          <ThemeIcon color="dark" variant="light" radius="lg" size="xl">
            {props.children}
          </ThemeIcon>
        </Center>
      }
    />
  );
};

export default CircleProgress;

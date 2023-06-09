import React from "react";

import { ThemeIcon, RingProgress, Center, Group } from "@mantine/core";
import { IconCategory } from "@tabler/icons-react";

import Type from "~/createShop/Type";

function NewShop() {
  return (
    <div>
      <Group position="right">
        <RingProgress
          sections={[{ value: 0, color: "blue" }]}
          label={
            <Center>
              <ThemeIcon color="dark" variant="light" radius="lg" size="xl">
                <IconCategory size={22} />
              </ThemeIcon>
            </Center>
          }
        />
      </Group>

      <Type />
    </div>
  );
}

export default NewShop;

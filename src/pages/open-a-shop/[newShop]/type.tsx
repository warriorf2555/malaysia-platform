import React from "react";

import { Group } from "@mantine/core";
import { IconCategory } from "@tabler/icons-react";

import Type from "~/createShop/Type";
import CircleProgress from "@/common/RingProgress/CircleProgress";

function NewShop() {
  return (
    <div>
      <Group position="right" className="max-w-[75%]">
        <CircleProgress value={0}>
          <IconCategory size={22} />
        </CircleProgress>
      </Group>

      <Type />
    </div>
  );
}

export default NewShop;

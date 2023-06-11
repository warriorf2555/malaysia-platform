import React from "react";
import { useRouter } from "next/router";

import { Button, Group } from "@mantine/core";
import { IconMapSearch } from "@tabler/icons-react";

import CatchTheEyeShowcase from "~/createShop/CatchTheEyeShowcase";
import CircleProgress from "@/common/RingProgress/CircleProgress";
import Link from "next/link";

function CatchTheEye() {
  const router = useRouter();
  const { newShop } = router.query;
  const path =
    newShop && typeof newShop === "string"
      ? `/open-a-shop/${newShop}/upload-photos`
      : "";

  return (
    <div>
      <Group position="right">
        <CircleProgress value={20}>
          <IconMapSearch size={22} />
        </CircleProgress>
      </Group>

      <CatchTheEyeShowcase />

      <Group position="right" className="mt-auto">
        <Link href={path}>
          <Button>Next step</Button>
        </Link>
      </Group>
    </div>
  );
}

export default CatchTheEye;

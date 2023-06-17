import React, { useEffect } from "react";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

import { Button, Group } from "@mantine/core";
import ShopOverview from "~/createShop/Overview";

import { getEnumObjectByCode } from "~/helper";
import { providerType } from "~/common/constants/providerType";

function Overview() {
  const { mutate, isSuccess, data } = api.shop.create.useMutation();
  const router = useRouter();

  const result = getEnumObjectByCode(providerType, 1);

  console.log("providerType", result);

  const nextStep = () => {
    mutate();
  };

  useEffect(() => {
    if (data) {
      void router.push(`/open-a-shop/${data}/type`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <div>
      <ShopOverview />

      <Group position="right" className="mt-auto">
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </div>
  );
}

export default Overview;

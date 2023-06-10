import React, { useState } from "react";
import { api } from "~/utils/api";

import { Group, Button } from "@mantine/core";
import { IconMapSearch } from "@tabler/icons-react";

import CircleProgress from "@/common/RingProgress/CircleProgress";
import Location from "~/createShop/Location";

function LocationView() {
  const [marker, setMarker] = useState({ lat: 0, lng: 0 });
  const { mutate } = api.shop.updateLocation.useMutation();

  const handleLocation = () => {
    mutate({ lat: marker.lat, lng: marker.lng });
  };

  return (
    <div>
      <Group position="right">
        <CircleProgress value={20}>
          <IconMapSearch size={22} />
        </CircleProgress>
      </Group>

      <Location marker={marker} setMarker={setMarker} />

      <Group position="right" className="mt-auto">
        <Button
          disabled={marker.lat === 0 && marker.lng === 0}
          onClick={handleLocation}
        >
          Next step
        </Button>
      </Group>
    </div>
  );
}

export default LocationView;

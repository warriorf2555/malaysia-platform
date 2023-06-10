import React, { useState } from "react";

import { Group, Button, Grid } from "@mantine/core";
import { IconMapSearch } from "@tabler/icons-react";

import CircleProgress from "@/common/RingProgress/CircleProgress";
import Location from "~/createShop/Location";
import LocationForm from "~/createShop/LocationForm";

function LocationView() {
  const [marker, setMarker] = useState({ lat: 0, lng: 0 });
  const [isConfirm, setConfirm] = useState(false);

  return (
    <div>
      <Group position="right">
        <CircleProgress value={20}>
          <IconMapSearch size={22} />
        </CircleProgress>
      </Group>

      {isConfirm ? (
        <Grid className="flex max-h-[80vh] min-h-[70vh] max-w-[100vw] items-center justify-center">
          <Grid.Col xs={4}>
            <Location
              isConfirm={isConfirm}
              marker={marker}
              setMarker={setMarker}
            />
          </Grid.Col>
          <Grid.Col xs={4}>
            <LocationForm marker={marker} />
          </Grid.Col>
        </Grid>
      ) : (
        <Location isConfirm={isConfirm} marker={marker} setMarker={setMarker} />
      )}

      {!isConfirm ? (
        <Group position="right" className="mt-auto">
          <Button
            disabled={marker.lat === 0 && marker.lng === 0}
            onClick={() => {
              setConfirm(true);
            }}
          >
            Next step
          </Button>
        </Group>
      ) : null}
    </div>
  );
}

export default LocationView;

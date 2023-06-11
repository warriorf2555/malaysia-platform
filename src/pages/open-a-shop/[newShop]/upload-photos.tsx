import React from "react";

import { Group } from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";

import CircleProgress from "@/common/RingProgress/CircleProgress";
import UploadPhotosView from "~/createShop/UploadPhotosView";

const UploadPhotos = () => {
  return (
    <div>
      <Group position="right">
        <CircleProgress value={50}>
          <IconPhoto size={22} />
        </CircleProgress>
      </Group>

      <UploadPhotosView />
    </div>
  );
};

export default UploadPhotos;

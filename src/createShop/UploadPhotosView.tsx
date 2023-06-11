import React from "react";
import { useRouter } from "next/router";

import { Text, Title, Grid } from "@mantine/core";
import { CldUploadWidget } from "next-cloudinary";
import { IconPhotoPlus } from "@tabler/icons-react";

declare global {
  let cloudinary: string;
}

const UploadPhotosView = () => {
  const router = useRouter();
  const { newShop } = router.query;
  const id = newShop && typeof newShop === "string" ? newShop : "";

  const handleUpload = (result: any) => {
    console.log("result", result);
  };

  if (id) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <Grid>
          <Grid.Col xs={12}>
            <Title order={1}>
              Add some{" "}
              <Text span c="blue" inherit>
                photos
              </Text>{" "}
              of your shop
            </Title>
            <Text size={"md"}>
              To begin, you will need at least 5 photos. More can be added, and
              editing is possible later.
            </Text>{" "}
          </Grid.Col>
          <Grid.Col xs={12}>
            <CldUploadWidget
              onUpload={handleUpload}
              uploadPreset="t7ggzuvs"
              options={{
                showUploadMoreButton: true,
                clientAllowedFormats: ["jpg", "png", "jpeg"],
                folder: `shop/${id}`,
              }}
            >
              {({ open }) => {
                return (
                  <div
                    onClick={() => {
                      open?.();
                    }}
                    className="relative flex cursor-pointer flex-col items-center justify-center gap-4 border-2 border-dashed border-neutral-300 p-20
                       text-neutral-500 transition hover:opacity-70"
                  >
                    <IconPhotoPlus />
                  </div>
                );
              }}
            </CldUploadWidget>
          </Grid.Col>
        </Grid>
      </div>
    );
  }
};

export default UploadPhotosView;

import React, { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

import { Text, Title, Grid } from "@mantine/core";
import { CldUploadWidget } from "next-cloudinary";
import { IconPhotoPlus } from "@tabler/icons-react";

declare global {
  let cloudinary: string;
}

interface MainPhotoGridProps {
  userId: string;
  shopId: string;
  handleUpload: (value: string) => void;
  pictures: string[];
}

interface SubPhotoGridProps {
  userId: string;
  shopId: string;
  handleUpload: (value: string) => void;
  picture: string;
}

const MainPhotoGrid: React.FC<MainPhotoGridProps> = ({
  userId,
  shopId,
  handleUpload,
  pictures,
}) => {
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="t7ggzuvs"
      options={{
        showUploadMoreButton: true,
        clientAllowedFormats: ["jpg", "png", "jpeg"],
        folder: `shop/${userId}/${shopId}`,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => {
              open?.();
            }}
            className="relative flex h-[600px] cursor-pointer flex-col items-center justify-center gap-4 border-2 border-dashed
             border-neutral-300 p-20 text-neutral-500 transition hover:opacity-70"
          >
            <IconPhotoPlus />
            <div className="text-lg font-semibold">Click to upload</div>
            {pictures.length > 0 ? (
              <div className="absolute inset-0 h-full w-full">
                <Image
                  alt="upload"
                  fill
                  style={{ objectFit: "cover" }}
                  src={pictures[0] || ""}
                />
              </div>
            ) : null}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

const SubPhotoGrid: React.FC<SubPhotoGridProps> = ({
  userId,
  shopId,
  handleUpload,
  picture,
}) => {
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="t7ggzuvs"
      options={{
        showUploadMoreButton: true,
        clientAllowedFormats: ["jpg", "png", "jpeg"],
        folder: `shop/${userId}/${shopId}`,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => {
              open?.();
            }}
            className="relative flex h-[300px] cursor-pointer flex-col items-center justify-center gap-4 border-2 border-dashed
             border-neutral-300 p-20 text-neutral-500 transition hover:opacity-70"
          >
            <IconPhotoPlus />
            <div className="text-lg font-semibold">Click to upload</div>
            {picture ? (
              <div className="absolute inset-0 h-full w-full">
                <Image
                  alt="upload"
                  fill
                  style={{ objectFit: "contain" }}
                  src={picture}
                />
              </div>
            ) : null}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

const UploadPhotosView = () => {
  // Get Shop ID
  const router = useRouter();
  const { newShop } = router.query;
  const shopId = newShop && typeof newShop === "string" ? newShop : "";

  // Get User ID
  const user = useUser();
  const userId = user.user?.id || "";
  const [pictures, setPictures] = useState<string[]>([]);

  const handleUpload = (result: any) => {
    console.log("result", result);
    const arrayResult = structuredClone(pictures);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    arrayResult.push(result?.info?.secure_url);
    setPictures(arrayResult);
  };

  console.log("pictures", pictures);

  if (shopId) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="max-w-[49vw]">
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
                To begin, you will need at least 5 photos. More can be added,
                and editing is possible later.
              </Text>{" "}
            </Grid.Col>
            <Grid.Col xs={12}>
              <MainPhotoGrid
                userId={userId}
                shopId={shopId}
                handleUpload={handleUpload}
                pictures={pictures}
              />
            </Grid.Col>
            {pictures.slice(1).map((picture, index) => {
              return (
                <Grid.Col xs={6} key={index}>
                  <SubPhotoGrid
                    userId={userId}
                    shopId={shopId}
                    handleUpload={handleUpload}
                    picture={picture}
                  />
                </Grid.Col>
              );
            })}
          </Grid>
        </div>
      </div>
    );
  }
};

export default UploadPhotosView;

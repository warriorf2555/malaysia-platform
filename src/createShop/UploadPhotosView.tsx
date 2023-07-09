/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { env } from "~/env.mjs";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";

import { Text, Title, Grid } from "@mantine/core";
import { CldUploadWidget } from "next-cloudinary";
import { IconPhotoPlus } from "@tabler/icons-react";

const ADD = "ADD";
declare global {
  let cloudinary: string;
}
interface MainPhotoGridProps {
  userId: string;
  shopId: string;
  handleUpload: (result: any) => void;
  pictures: string[];
}

interface SubPhotoGridProps {
  userId: string;
  shopId: string;
  subHandleUpload: (result: any, index: number, type: string) => void;
  picture: string;
  index?: number;
  type?: string;
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
      uploadPreset={env.NEXT_PUBLIC_CLOUDINARY_PRESET_KEY}
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
  subHandleUpload,
  picture,
  index,
  type,
}) => {
  return (
    <React.Fragment>
      <CldUploadWidget
        onUpload={(e: any) => subHandleUpload(e, index || 0, type || "")}
        uploadPreset={env.NEXT_PUBLIC_CLOUDINARY_PRESET_KEY}
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
    </React.Fragment>
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
    const arrayResult = structuredClone(pictures);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    arrayResult.push(result?.info?.secure_url);
    setPictures(arrayResult);
  };

  const subHandleUpload = (result: any, index: number, type: string) => {
    const arrayResult = structuredClone(pictures);
    const subPictureIndex = index + 1;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    if (type === ADD) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
      arrayResult.push(result?.info?.secure_url);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
      arrayResult[subPictureIndex] = result?.info?.secure_url;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    setPictures(arrayResult);
  };

  console.log("pictures", pictures);

  if (shopId) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center ">
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
            {pictures.length === 1 ? (
              <Grid.Col xs={6}>
                <SubPhotoGrid
                  key={"initialSub"}
                  userId={userId}
                  shopId={shopId}
                  subHandleUpload={subHandleUpload}
                  picture={""}
                />
              </Grid.Col>
            ) : (
              pictures.slice(1).map((picture, index) => {
                return (
                  <Grid.Col xs={6} key={index}>
                    <SubPhotoGrid
                      userId={userId}
                      shopId={shopId}
                      subHandleUpload={subHandleUpload}
                      picture={picture}
                      index={index}
                    />
                  </Grid.Col>
                );
              })
            )}
            {pictures.length > 1 ? (
              <Grid.Col xs={6}>
                <SubPhotoGrid
                  key={"initialSub"}
                  userId={userId}
                  shopId={shopId}
                  subHandleUpload={subHandleUpload}
                  picture={""}
                  type={ADD}
                />
              </Grid.Col>
            ) : null}
          </Grid>
        </div>
      </div>
    );
  }
};

export default UploadPhotosView;

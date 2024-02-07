"use client";

import { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";

interface CloudinaryUploadResInfo {
  public_id: string;
}

export default function UploadPage() {
  const [publicId, setPublicId] = useState<string>("");

  return (
    <>
      {publicId !== "" && <CldImage src={publicId} width={270} height={180} alt="My Picture" />}
      <CldUploadWidget uploadPreset="lgydaelz" onUpload={(result, widget) => {
        if (result.event !== "success") {
          return;
        }

        const info = result.info as CloudinaryUploadResInfo;

        setPublicId(info.public_id);
      }}
      // more options can be found at https://demo.cloudinary.com/uw/#/
      options={{
        sources: [
          "local",
          "url",
          "camera",
          "instagram"
        ],
        cropping: true,
        multiple: false,
        defaultSource: "local",
        styles: {
            palette: {
                window: "#5D005D",
                sourceBg: "#3A0A3A",
                windowBorder: "#AD5BA3",
                tabIcon: "#ffffcc",
                inactiveTabIcon: "#FFD1D1",
                menuIcons: "#FFD1D1",
                link: "#ffcc33",
                action: "#ffcc33",
                inProgress: "#00e6b3",
                complete: "#a6ff6f",
                error: "#ff1765",
                textDark: "#3c0d68",
                textLight: "#fcfffd"
            },
            fonts: {
                default: null,
                "'Poppins', sans-serif": {
                    url: "https://fonts.googleapis.com/css?family=Poppins",
                    active: true
                }
            }
        }
      }}>
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>Upload</button>
        )}
      </CldUploadWidget>
    </>
  );
}

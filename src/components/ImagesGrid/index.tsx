"use client";
import Image from "next/image";
import React from "react";

interface Props {
  width: number;
}

const images: string[] = [
  "https://picsum.photos/600/400",
  "https://picsum.photos/600/400",
  "https://picsum.photos/600/400",
  "https://picsum.photos/600/400",
  "https://picsum.photos/600/400",
  "https://picsum.photos/600/400",
  "https://picsum.photos/600/400",
  "https://picsum.photos/600/400",
  "https://picsum.photos/600/400",
  "https://picsum.photos/600/400",
];

const ImagesGrid: React.FC<Props> = ({ width }: Props) => {
  return (
    <div
      style={{ width: `${width}px` }}
      className="p-4 border border-black rounded-md m-3 bg-white"
    >
      <div
        className={`w-full gap-5 grid ${
          width < 600
            ? "grid-cols-4"
            : width < 1000
            ? "grid-cols-6"
            : width < 1280
            ? "grid-cols-8"
            : "grid-cols-10"
        }`}
      >
        {images?.map((image, index) => (
          <Image
            key={index}
            width={600}
            height={350}
            className="w-full rounded-lg"
            src={image}
            alt="alt text should be here"
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesGrid;

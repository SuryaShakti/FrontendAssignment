"use client";
import ImagesGrid from "@/components/ImagesGrid";
import { NextPage } from "next";
import React, { useState } from "react";

const widths: number[] = [590, 790, 990, 1270, 1400];

const GridPage: NextPage = () => {
  const [selectedWidth, setSelectedWidth] = useState<number>(widths[0]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-violet-600 to-indigo-600">
      <label className="text-white">Select Width</label>
      <select
        value={selectedWidth}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedWidth(Number(e.target.value))
        }
        className="p-2 rounded-md "
      >
        {widths?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <ImagesGrid width={selectedWidth} />
    </div>
  );
};

export default GridPage;

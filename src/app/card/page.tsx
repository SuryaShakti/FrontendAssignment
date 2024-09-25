"use client";
import { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";

const dropDownOptions: string[] = ["10px", "25px", "35px"];

const Page: NextPage = () => {
  const [cardBg, setCardBg] = useState<string>("#eeeeee");
  const [cardTextColor, setCardTextColor] = useState<string>("#000000");
  const [cardPadding, setCardPadding] = useState<string>("10px");
  const [cardBorderRadius, setCardBorderRadius] = useState<string>("10px");

  const handleChange = (
    classVariable: string,
    value: string,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(value);
    document.documentElement.style.setProperty(classVariable, value);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <div className="py-5 grid grid-cols-4 gap-5">
        <div>
          <div>Card Text Color</div>
          <input
            type="color"
            value={cardTextColor}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("--cardTextColor", e.target.value, setCardTextColor)
            }
          />
        </div>
        <div>
          <div>Card BG</div>
          <input
            type="color"
            value={cardBg}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("--cardBackground", e.target.value, setCardBg)
            }
          />
        </div>
        <div>
          <div>Card Border Radius</div>
          <select
            name="rounded"
            id="rounded"
            value={cardBorderRadius}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleChange(
                "--cardBorderRadius",
                e.target.value,
                setCardBorderRadius
              )
            }
          >
            {dropDownOptions?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div>Card Padding</div>
          <select
            name="padding"
            id="padding"
            value={cardPadding}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleChange("--cardPadding", e.target.value, setCardPadding)
            }
          >
            {dropDownOptions?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-96 p-cardPadding rounded-cardBorderRadius bg-cardBg border shadow">
          <Image
            width={600}
            height={350}
            className="rounded-lg"
            src="https://picsum.photos/600/400"
            alt=""
          />
          <div className="space-y-2">
            <div className="text-cardTextColor text-xl font-semibold">
              Title of the card
            </div>
            <div className="text-cardTextColor text-sm">
              Subtitle of the card
            </div>
            <div className="text-cardTextColor">
              Laborum ipsum est dolore occaecat dolore eu fugiat. Aute excepteur
              Lorem eiusmod est et magna laborum. Magna in fugiat laborum ea
              Lorem. Labore cupidatat et cupidatat mollit ea exercitation. Eu
              duis ipsum reprehenderit laborum duis consectetur.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

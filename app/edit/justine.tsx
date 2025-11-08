"use client";

import justine1 from "@/public/justine/1.png";
import justine2 from "@/public/justine/2.png"
import justine3 from "@/public/justine/3.png"
import justine4 from "@/public/justine/4.png"

import justine5 from "@/public/justine/5.png"
import justine6 from "@/public/justine/6.png"
import justine7 from "@/public/justine/7.png"
import justine8 from "@/public/justine/8.png"
import justine9 from "@/public/justine/9.png"
import justine10 from "@/public/justine/10.png"

import Image from "next/image";
import { useImagesStore } from "@/providers/images-store-provider";

export const Justine = () => {
  const { images } = useImagesStore((store) => store);

  const isLessThanTwoImages = images.length < 2;
  const isLessThanThreeImages = images.length < 3;
  return (
    <div>
      <Image src={justine1} alt="" className="absolute top-4 w-20" />
      <Image src={justine2} alt="" className="absolute top-20 right-6 w-20" />
      <Image src={justine3} alt="" className="absolute top-40 left-6 w-20" />
      {!isLessThanTwoImages && (
        <Image src={justine4} alt="" className="absolute top-60 right-6 w-20" />
      )}
      {!isLessThanTwoImages && (
        <Image src={justine5} alt="" className="absolute top-80 left-6 w-20" />
      )}
      {!isLessThanTwoImages && (
        <Image src={justine6} alt="" className="absolute top-96 left-32 w-20" />
      )}
      {!isLessThanThreeImages && (
        <Image
          src={justine7}
          alt=""
          className="absolute right-6 bottom-56 w-20"
        />
      )}
      {!isLessThanThreeImages && (
        <Image
          src={justine8}
          alt=""
          className="absolute bottom-36 left-6 w-20"
        />
      )}
      <Image
        src={justine9}
        alt=""
        className="absolute right-6 bottom-18 w-20"
      />
      {!isLessThanTwoImages && (
        <Image
          src={justine10}
          alt=""
          className="absolute bottom-8 left-6 w-20"
        />
      )}
    </div>
  );
};

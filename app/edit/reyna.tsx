"use client";

import reyna1 from "@/public/reyna/1.png";
import reyna2 from "@/public/reyna/2.png";
import reyna3 from "@/public/reyna/3.png";
import reyna4 from "@/public/reyna/4.png";
import reyna5 from "@/public/reyna/5.png";
import reyna6 from "@/public/reyna/6.png";
import reyna7 from "@/public/reyna/7.png";
import reyna8 from "@/public/reyna/8.png";
import reyna9 from "@/public/reyna/9.png";
import reyna10 from "@/public/reyna/10.png";

import Image from "next/image";
import { useImagesStore } from "@/providers/images-store-provider";

export const Reyna = () => {
  const { images } = useImagesStore((store) => store);

  const isLessThanTwoImages = images.length < 2;
  const isLessThanThreeImages = images.length < 3;
  
  return (
    <div>
      <Image src={reyna1} alt="" className="absolute top-4 w-20" />
      <Image src={reyna2} alt="" className="absolute top-20 right-6 w-20" />
      <Image src={reyna3} alt="" className="absolute top-40 left-6 w-20" />
      {!isLessThanTwoImages && (
        <Image src={reyna4} alt="" className="absolute top-60 right-6 w-20" />
      )}
      {!isLessThanTwoImages && (
        <Image src={reyna5} alt="" className="absolute top-80 left-6 w-20" />
      )}
      {!isLessThanTwoImages && (
        <Image src={reyna6} alt="" className="absolute top-96 left-32 w-20" />
      )}
      {!isLessThanThreeImages && (
        <Image
          src={reyna7}
          alt=""
          className="absolute right-6 bottom-56 w-20"
        />
      )}
      {!isLessThanThreeImages && (
        <Image
          src={reyna8}
          alt=""
          className="absolute bottom-36 left-6 w-20"
        />
      )}
      <Image
        src={reyna9}
        alt=""
        className="absolute right-6 bottom-18 w-20"
      />
      {!isLessThanTwoImages && (
        <Image
          src={reyna10}
          alt=""
          className="absolute bottom-8 left-6 w-20"
        />
      )}
    </div>
  );
};

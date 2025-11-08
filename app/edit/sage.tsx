"use client";

import sage1 from "@/public/sage/1.png";
import sage2 from "@/public/sage/2.png";
import sage3 from "@/public/sage/3.png";
import sage4 from "@/public/sage/4.png";
import sage5 from "@/public/sage/5.png";
import sage6 from "@/public/sage/6.png";
import sage7 from "@/public/sage/7.png";
import sage8 from "@/public/sage/8.png";
import sage9 from "@/public/sage/9.png";
import sage10 from "@/public/sage/10.png";

import Image from "next/image";
import { useImagesStore } from "@/providers/images-store-provider";

export const Sage = () => {
  const { images } = useImagesStore((store) => store);

  const isLessThanTwoImages = images.length < 2;
  const isLessThanThreeImages = images.length < 3;
  
  return (
    <div>
      <Image src={sage1} alt="" className="absolute top-4 w-20" />
      <Image src={sage2} alt="" className="absolute top-20 right-6 w-20" />
      <Image src={sage3} alt="" className="absolute top-40 left-6 w-20" />
      {!isLessThanTwoImages && (
        <Image src={sage4} alt="" className="absolute top-60 right-6 w-20" />
      )}
      {!isLessThanTwoImages && (
        <Image src={sage5} alt="" className="absolute top-80 left-6 w-20" />
      )}
      {!isLessThanTwoImages && (
        <Image src={sage6} alt="" className="absolute top-96 left-32 w-20" />
      )}
      {!isLessThanThreeImages && (
        <Image
          src={sage7}
          alt=""
          className="absolute right-6 bottom-56 w-20"
        />
      )}
      {!isLessThanThreeImages && (
        <Image
          src={sage8}
          alt=""
          className="absolute bottom-36 left-6 w-20"
        />
      )}
      <Image
        src={sage9}
        alt=""
        className="absolute right-6 bottom-18 w-20"
      />
      {!isLessThanTwoImages && (
        <Image
          src={sage10}
          alt=""
          className="absolute bottom-8 left-6 w-20"
        />
      )}
    </div>
  );
};

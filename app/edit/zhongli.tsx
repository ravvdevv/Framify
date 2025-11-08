"use client";

import zhongli1 from "@/public/zhongli/1.png";
import zhongli2 from "@/public/zhongli/2.png"
import zhongli3 from "@/public/zhongli/3.png"
import zhongli4 from "@/public/zhongli/4.png"

import zhongli5 from "@/public/zhongli/5.png"
import zhongli6 from "@/public/zhongli/6.png"
import zhongli7 from "@/public/zhongli/7.png"
import zhongli8 from "@/public/zhongli/8.png"
import zhongli9 from "@/public/zhongli/9.png"
import zhongli10 from "@/public/zhongli/10.png"

import Image from "next/image";
import { useImagesStore } from "@/providers/images-store-provider";

export const Zhongli = () => {
  const { images } = useImagesStore((store) => store);

  const isLessThanTwoImages = images.length < 2;
  const isLessThanThreeImages = images.length < 3;
  return (
    <div>
      <Image src={zhongli1} alt="" className="absolute top-4 w-16" />
      <Image src={zhongli2} alt="" className="absolute top-20 right-6 w-16" />
      <Image src={zhongli3} alt="" className="absolute top-40 left-6 w-16" />
      {!isLessThanTwoImages && (
        <Image src={zhongli4} alt="" className="absolute top-60 right-6 w-16" />
      )}
      {!isLessThanTwoImages && (
        <Image src={zhongli5} alt="" className="absolute top-80 left-6 w-16" />
      )}
      {!isLessThanTwoImages && (
        <Image src={zhongli6} alt="" className="absolute top-96 left-32 w-16" />
      )}
      {!isLessThanThreeImages && (
        <Image
          src={zhongli7}
          alt=""
          className="absolute right-6 bottom-56 w-16"
        />
      )}
      {!isLessThanThreeImages && (
        <Image
          src={zhongli8}
          alt=""
          className="absolute bottom-36 left-6 w-16"
        />
      )}
      <Image
        src={zhongli9}
        alt=""
        className="absolute right-6 bottom-18 w-16"
      />
      {!isLessThanTwoImages && (
        <Image
          src={zhongli10}
          alt=""
          className="absolute bottom-8 left-6 w-16"
        />
      )}
    </div>
  );
};

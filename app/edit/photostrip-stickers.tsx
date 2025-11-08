"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import axolotlIcon from "@/public/axolotl-stickers/happy.svg";
import catIcon from "@/public/cat-stickers/eat.svg";
import pandaIcon from "@/public/panda-stickers/happy.svg";
import zhongliIcon from "@/public/zhongli/1.png";
import jetIcon from "@/public/jet/6.png";
import justineIcon from "@/public/justine/8.png";
import sageIcon from "@/public/sage/10.png";
import reynaIcon from "@/public/reyna/1.png";
import { useFiltersStore } from "@/providers/filters-store-provider";
import { cn } from "@/lib/utils";
import { Trash } from "lucide-react";

export const PhotostripStickers = () => {
  const { stickers, setStickers } = useFiltersStore((store) => store);

  return (
    <div className="grid grid-cols-4">
      <Button
        onClick={() => setStickers("axolotl")}
        variant="ghost"
        className={cn(
          "h-auto",
          stickers === "axolotl" && "border-2 border-primary"
        )}
      >
        <Image src={axolotlIcon} alt="" className="w-10" />
        <span className="sr-only">Axolotl stickers</span>
      </Button>
      <Button
        onClick={() => setStickers("cat")}
        variant="ghost"
        className={cn(
          "h-auto",
          stickers === "cat" && "border-2 border-primary"
        )}
      >
        <Image src={catIcon} alt="" className="w-10" />
        <span className="sr-only">Cat stickers</span>
      </Button>
      <Button
        onClick={() => setStickers("panda")}
        variant="ghost"
        className={cn(
          "h-auto",
          stickers === "panda" && "border-2 border-primary"
        )}
      >
        <Image src={pandaIcon} alt="" className="w-10" />
        <span className="sr-only">Panda stickers</span>
      </Button>
      <Button
        onClick={() => setStickers("zhongli")}
        variant="ghost"
        className={cn(
          "h-auto",
          stickers === "zhongli" && "border-2 border-primary"
        )}
      >
        <Image src={zhongliIcon} alt="" className="w-12" />
        <span className="sr-only">Zhongli stickers</span>
      </Button>
      <Button
        onClick={() => setStickers("jet")}
        variant="ghost"
        className={cn(
          "h-auto",
          stickers === "jet" && "border-2 border-primary"
        )}
      >
        <Image src={jetIcon} alt="" className="w-12" />
        <span className="sr-only">Jet stickers</span>
      </Button>
      <Button
        onClick={() => setStickers("sage")}
        variant="ghost"
        className={cn(
          "h-auto",
          stickers === "sage" && "border-2 border-primary"
        )}
      >
        <Image src={sageIcon} alt="" className="w-20" />
        <span className="sr-only">Sage stickers</span>
      </Button>
      <Button
        onClick={() => setStickers("justine")}
        variant="ghost"
        className={cn(
          "h-auto",
          stickers === "justine" && "border-2 border-primary"
        )}
      >
        <Image src={justineIcon} alt="" className="w-12" />
        <span className="sr-only">Justine stickers</span>
      </Button>
      <Button
        onClick={() => setStickers("reyna")}
        variant="ghost"
        className={cn(
          "h-auto",
          stickers === "reyna" && "border-2 border-primary"
        )}
      >
        <Image src={reynaIcon} alt="" className="w-16" />
        <span className="sr-only">Reyna stickers</span>
      </Button>
      <Button
        onClick={() => setStickers(null)}
        variant="ghost"
        className={cn(
          "h-full w-full",
          !stickers && "border-2 border-primary"
        )}
      >

        <Trash />
      </Button>
    </div>
  );
};

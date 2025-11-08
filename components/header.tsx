import Link from "next/link";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Sparkles, Github, Globe, Instagram } from "lucide-react";
import Image from "next/image";

import tiktokLogo from "@/public/tiktok.svg";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <Link href="/" className="group flex items-center gap-2 font-math text-3xl font-italic text-pink-600">
        <Sparkles className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
        Framify
      </Link>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className="text-xl">
            About
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#F6F0F0] md:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-3xl">
              Welcome to Framify! 📸✨
            </DialogTitle>
            <DialogDescription>Your Digital Photobooth</DialogDescription>
          </DialogHeader>
          <div className="space-y-5 text-center text-xl/relaxed sm:text-left">
            <p>
              Strike a pose and capture the moment with Framify! Our digital photobooth lets you take fun, creative photos with various frames and effects. Perfect for parties, events, or just having fun with friends! 😊
            </p>
            <p>
              📸 Snap. Frame. Share. Create unforgettable memories with Framify&apos;s instant digital photobooth!
            </p>
          </div>
          <DialogFooter className="gap-3">
            <Link href="https://www.instagram.com/ravdevv/" target="_blank">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://www.tiktok.com/@ravdevv" target="_blank">
              <Image src={tiktokLogo} alt="" className="h-5 w-5" />
            </Link>
            <Link href="https://github.com/ravvdevv" target="_blank">
              <Github />
            </Link>
            <Link href="https://framify.vercel.app/" target="_blank">
              <Globe />
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};

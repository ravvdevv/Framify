import Link from "next/link";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="mx-auto p-5">
      <div className="flex items-center gap-2 text-lg">
       
        Made with ❤️ by{" "}
        <Button asChild variant={"link"} className="h-auto p-0 text-xl">
          <Link href="https://github.com/ravvdevv" target="_blank">
            @ravdevv
          </Link>
        </Button>
      </div>
    </footer>
  );
};

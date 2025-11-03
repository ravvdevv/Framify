import hero from "@/public/hero.png";
import { Button } from "@/components/ui/button";
import { Camera, Upload, Sparkles, Zap, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container min-h-[calc(100vh-5rem)] px-5 py-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8 text-center md:mb-12">
          
          
          <h1 className="mb-4 font-stix-two-text text-5xl font-bold md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Framify
            </span>
          </h1>
          <div className="mb-4 inline-flex animate-bounce items-center gap-2 rounded-full border-2 border-primary bg-primary/10 px-5 py-2 text-base font-bold text-primary">
            <Sparkles className="h-5 w-5" />
            Digital Photobooth
          </div>
          
          <p className="mx-auto max-w-2xl text-xl font-medium text-muted-foreground md:text-2xl">
            Strike a pose, pick a frame, and create instant memories! 📸✨
          </p>
          
        </div>
        

        {/* Main Content Grid */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Hero Image - Mobile First */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-md">
              {/* Glow Effect */}
              <div className="absolute -inset-8 animate-pulse rounded-full bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 blur-3xl" />
              
              {/* Main Image with Float Animation */}
              <div className="relative animate-float drop-shadow-2xl">
                <Image 
                  src={hero} 
                  alt="Photobooth preview" 
                  className="w-full"
                  priority
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -right-4 top-10 animate-bounce text-4xl">
                🎉
              </div>
              <div className="absolute -left-4 top-32 animate-bounce text-4xl delay-100">
                ✨
              </div>
              <div className="absolute -right-8 bottom-20 animate-bounce text-4xl delay-200">
                💫
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="order-2 space-y-6 lg:order-1">
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="group h-auto w-full bg-gradient-to-r from-primary to-purple-600 px-10 py-8 text-2xl font-black uppercase shadow-2xl transition-all hover:scale-105 hover:shadow-primary/50"
              >
                <Link href="/camera" className="flex items-center justify-center gap-4">
                  <Camera className="h-8 w-8 transition-transform group-hover:rotate-12" />
                  <span>Start Photobooth</span>
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group h-auto w-full border-4 border-primary/30 bg-background px-10 py-8 text-2xl font-black uppercase shadow-xl transition-all hover:scale-105 hover:border-primary hover:bg-primary/5"
              >
                <Link href="/upload" className="flex items-center justify-center gap-4">
                  <Upload className="h-8 w-8 transition-transform group-hover:-translate-y-1" />
                  <span>Upload Photos</span>
                </Link>
              </Button>
            </div>
            
            {/* Feature Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="group rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-purple-500/5 p-5 transition-all hover:scale-105 hover:border-primary/40 hover:shadow-lg">
                <div className="mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-foreground">Instant Fun</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Snap & frame in seconds - perfect for events!
                </p>
              </div>
              
              <div className="group rounded-2xl border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5 p-5 transition-all hover:scale-105 hover:border-purple-500/40 hover:shadow-lg">
                <div className="mb-2 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-purple-600" />
                  <h3 className="font-bold text-foreground">Awesome Frames</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tons of styles for every occasion & vibe
                </p>
              </div>
            </div>

            {/* Call to Action Banner */}
            <div className="mt-6 rounded-2xl border-4 border-dashed border-primary/30 bg-primary/5 p-6 text-center">
              <p className="text-lg font-bold text-foreground md:text-xl">
                🎊 Perfect for Parties, Events & Celebrations! 🎊
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Create unforgettable memories with friends & family
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
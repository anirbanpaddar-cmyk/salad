import React from "react";
import { ArrowRight, Star, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface AvatarList {
  image: string;
}

interface HeroSectionProps {
  avatarList: AvatarList[];
}

export default function HeroSection({ avatarList }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Kicker Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Next-Generation Healthy Lifestyle Experience</span>
        </div>

        {/* Hero Title */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl max-w-4xl mx-auto leading-[1.15]">
          Elevate Your Daily Nutrition With{" "}
          <span className="text-primary underline decoration-primary/30 decoration-wavy underline-offset-8">
            Artisanal Fresh Greens
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Farm-to-table organic salads, chef-curated vinaigrettes, and balanced nutrition bowls designed to energize your body every single day.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 gap-2 font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all">
            <span>Explore Menu</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 font-semibold">
            Book Catering
          </Button>
        </div>

        {/* Avatar Social Proof Cluster */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground">
          <div className="flex -space-x-3 overflow-hidden p-1">
            {avatarList.map((avatar, idx) => (
              <img
                key={idx}
                src={avatar.image}
                alt={`Customer avatar ${idx + 1}`}
                referrerPolicy="no-referrer"
                className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover"
              />
            ))}
          </div>

          <div className="flex flex-col items-center sm:items-start text-left">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-500" />
              ))}
              <span className="ml-1 font-bold text-foreground text-sm">4.9 / 5.0</span>
            </div>
            <p className="text-xs text-muted-foreground font-medium">
              Trusted by 10,000+ healthy food lovers & active teams
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

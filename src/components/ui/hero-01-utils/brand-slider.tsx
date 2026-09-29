import React from "react";

export interface BrandList {
  image: string;
  lightimg?: string;
  name: string;
}

interface BrandSliderProps {
  brandList: BrandList[];
}

export default function BrandSlider({ brandList }: BrandSliderProps) {
  return (
    <div className="w-full border-t border-b border-border/40 bg-muted/20 py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
          Featured in Leading Wellness & Culinary Publications
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {brandList.map((brand, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <img
                src={brand.image}
                alt={brand.name}
                referrerPolicy="no-referrer"
                className="h-7 w-auto object-contain transition-transform hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = "none";
                }}
              />
              <span className="text-xs font-bold text-muted-foreground tracking-tight">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

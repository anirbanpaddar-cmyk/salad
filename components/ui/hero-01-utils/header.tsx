import React from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface NavigationSection {
  title: string;
  href: string;
  isActive?: boolean;
}

interface HeaderProps {
  navigationData: NavigationSection[];
}

export default function Header({ navigationData }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-extrabold shadow-sm">
            🥗
          </span>
          <span className="text-foreground">
            FRESH <span className="text-primary">SALAD</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navigationData.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`transition-colors hover:text-primary ${
                item.isActive ? "text-primary font-semibold" : "text-muted-foreground"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" className="rounded-full">
            Contact
          </Button>
          <Button size="sm" className="rounded-full gap-1.5 shadow-sm">
            <span>Get Started</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        {/* Mobile Navigation Sheet */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px]">
              <SheetHeader>
                <SheetTitle className="text-left font-bold text-lg">
                  FRESH <span className="text-primary">SALAD</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {navigationData.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className={`py-2 text-base font-medium transition-colors hover:text-primary ${
                      item.isActive ? "text-primary font-semibold" : "text-foreground/80"
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
                <div className="mt-4 pt-4 border-t flex flex-col gap-2">
                  <Button className="w-full rounded-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

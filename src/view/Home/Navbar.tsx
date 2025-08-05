"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Menu, ChefHat, User, CircleUser } from "lucide-react";
import Link from "next/link";
import { NavbarDropdown } from "../Shared/NavbarDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Food", href: "/food" },
    { name: "About", href: "/about" },
  ];
  const navItemsMobile = [
    { name: "Home", href: "/" },
    { name: "Food", href: "/food" },
    { name: "About", href: "/about" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" flex h-16 items-center px-3 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <ChefHat className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">FoodieHub</span>
        </Link>

        {/* Search Bar - Center */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-8">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 w-full"
            />
          </div>
        </div>

        {/* Desktop Navigation - Right */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <NavbarDropdown />
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center space-x-2 lg:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] px-5">
              <div className="flex flex-col space-y-4 mt-4">
                {/* Mobile Search */}
                <div className="relative pt-10">
                  <Search className="absolute left-2.5 top-13 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-8"
                  />
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-2 pt-5">
                  {navItemsMobile.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-2 py-1 text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

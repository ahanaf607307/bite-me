"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Filter, Search } from "lucide-react";

// Example categories - replace with real data or import
const categories = ["Pizza", "Burger", "Salad", "Pasta", "Dessert"];

export default function SidebarFilter() {
  return (
    <div className="space-y-6">
      <div className="lg:col-span-1">
        <div className="sticky top-20">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Find & Filter</h1>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Your Food
            </h2>
            <p className="text-muted-foreground">
              Discover delicious meals from our extensive menu. Use the filters
              to find exactly what you{`&apos;`}re craving.
            </p>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6 ">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full bg-transparent">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters & Search
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Filter Menu</SheetTitle>
                </SheetHeader>
                <div className="space-y-6 mt-4 p-4">
                  {/* Search */}
                  <div>
                    <Label
                      htmlFor="search"
                      className="text-base font-semibold mb-3 block"
                    >
                      Search Food
                    </Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="search"
                        placeholder="Search for food..."
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      Categories
                    </Label>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div
                          key={category}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={category} />
                          <Label
                            htmlFor={category}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      Price Range:
                    </Label>
                    <Slider max={50} min={0} step={1} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>$0</span>
                      <span>$50</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:block space-y-6">
            {/* Search */}
            <div>
              <Label
                htmlFor="search"
                className="text-base font-semibold mb-3 block"
              >
                Search Food
              </Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="search"
                  placeholder="Search for food..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Categories */}
            <div>
              <Label className="text-base font-semibold mb-3 block">
                Categories
              </Label>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={category} />
                    <Label
                      htmlFor={category}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <Label className="text-base font-semibold mb-3 block">
                Price Range:
              </Label>
              <Slider max={50} min={0} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>$0</span>
                <span>$50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

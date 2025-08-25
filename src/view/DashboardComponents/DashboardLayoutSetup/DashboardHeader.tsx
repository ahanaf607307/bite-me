"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ToggleButton } from "../ThemeProvider/ToggleButton";

const DashboardHeader = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col  justify-center sm:flex-row sm:justify-end items-center gap-4">
        {/* Group: Home Button + Search Input */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/" className="font-semibold">
            <Button
              variant={"outline"}
              className="border-2 bg-transparent text-white border-white hover:bg-white hover:text-black transition cursor-pointer "
            >
              Home
            </Button>
          </Link>

          <ToggleButton />
        </div>

        {/* Icons: center on small, right on medium+ */}
        <div className="flex justify-around items-center sm:justify-end gap-x-4 w-full sm:w-auto"></div>
      </div>
    </div>
  );
};

export default DashboardHeader;

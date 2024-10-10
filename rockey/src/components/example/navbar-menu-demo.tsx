"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavbarDemo() {
  return (
    <div  className="relative w-full flex items-center justify-center">
      <Navbar  className="top-5 z-50" />
    </div>
  );
}


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 text-white text-sm md:text-lg inset-x-0 md:w-[800px] w-96 mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link   href='/'>Home</Link>
        <MenuItem href="http://localhost:3000/education" setActive={setActive} active={active} item="Education">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">School Leaving </HoveredLink>
            <HoveredLink href="/individual">Collage</HoveredLink>
            <HoveredLink href="/team">Book</HoveredLink>
            <HoveredLink href="/enterprise">Entertainment</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem href="http://localhost:3000/project" setActive={setActive}  active={active} item="Project">
          <div className="  text-sm grid md:grid-cols-2 grid-cols-1 gap-10 p-4">
            <ProductItem 
              title="Algochurn"
              href="https://algochurn.com"
              src="/"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="/"
              description="Production ready Tailwind css components for your next project"
            />
          </div>
        </MenuItem>
        <MenuItem href="http://localhost:3000/helath" setActive={setActive} active={active} item="Health">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Physical</HoveredLink>
            <HoveredLink href="/individual">Mental</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem href="http://localhost:3000/extra" setActive={setActive} active={active} item="Extra">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Game</HoveredLink>
            <HoveredLink href="/team">Book</HoveredLink>
            <HoveredLink href="/enterprise">Entertainment</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

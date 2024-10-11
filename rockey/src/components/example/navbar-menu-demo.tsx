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
            <HoveredLink href="http://localhost:3000/education">Bachelor </HoveredLink>
            <HoveredLink href="http://localhost:3000/education">SLC</HoveredLink>
            <HoveredLink href="http://localhost:3000/education">SEE</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem href="http://localhost:3000/project" setActive={setActive}  active={active} item="Project">
          <div className="  text-sm grid md:grid-cols-2 grid-cols-1 gap-10 p-4">
            <ProductItem 
              title="GitHub"
              href="https://github.com/rockeyrai"
              src="/20220207_124423.jpg"
              description="GitHub site to my personal project "
            />
            <ProductItem
              title="eEcommerce-1"
              href="https://github.com/rockeyrai/Ecommerce-1"
              src="/"
              description="This is my first eCommerce project built using the MERN stack."
            />
          </div>
        </MenuItem>
        <MenuItem href="http://localhost:3000/helath" setActive={setActive} active={active} item="Health">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="http://localhost:3000/helath">Physical</HoveredLink>
            <HoveredLink href="http://localhost:3000/helath">Mental</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem href="http://localhost:3000/extra" setActive={setActive} active={active} item="Extra">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="http://localhost:3000/extra">Song</HoveredLink>
            <HoveredLink href="http://localhost:3000/extra">Game</HoveredLink>
            <HoveredLink href="http://localhost:3000/extra">Book</HoveredLink>
            <HoveredLink href="http://localhost:3000/extra">Movie & Series</HoveredLink>
            <HoveredLink href="http://localhost:3000/extra">Art</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

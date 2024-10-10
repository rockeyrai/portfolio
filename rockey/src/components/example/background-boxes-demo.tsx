"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function BackgroundBoxesDemo() {
  return (
    <div className="md:h-[100vh] h-[700px] box-content relative w-full overflow-hidden bg-black flex flex-col  items-center justify-center">
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="md:flex-row flex flex-col-reverse sm:px-10 lg:gap-20 w-auto justify-start h-auto items-center  rounded-full mt-20 lg:mt-40 z-20">
        <div className=" md:w-[500px] space-y-2 h-auto p-5 flex lg:flex-none flex-col justify-center items-center md:items-start lg:justify-start ">
          <p className=" text-yellow-400 mt-2 font-semibold text-lg z-20">
            My NAME IS ROCEKY CHAMLING RAI
          </p>
          <h1 className={cn("md:text-6xl  font-bold text-xl text-white z-20")}>
            I Am A Full-Stack Web App Developer
          </h1>
          <p className="mt-2 text-neutral-300 z-20">
            I am earger to learn new thing and apply in my project
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Contact Me</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Rockey Chamling Rai</DialogTitle>
                <DialogDescription>
                  I am a passionate and dedicated student with a keen interest
                  in the IT field. I am a fast learner, constantly seeking to
                  improve my skills and expand my knowledge.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4"></div>
                <h1>
                  <span className="font-bold">Email</span>:
                  rockeyrai234@gamil.com
                </h1>
                <h1>
                  <span className="font-bold">Phone</span>: 9803520300
                </h1>
                <h1>
                  <Link href="https://github.com/rockeyrai">
                    <span className="font-bold">GitHub</span>{" "}
                    :github.com/rockeyrai{" "}
                  </Link>
                </h1>
                <h1>
                  <Link href="https://www.linkedin.com/in/rockey-rai-669310305/">
                    <span className="font-bold">Linkedin</span>{" "}
                    :linkedin.com/in/rockey-rai-669310305/
                  </Link>
                </h1>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className=" w-[180px] h-[180px] lg:h-[320px] lg:w-[320px]   bg-gray-200 rounded-full flex justify-center items-center z-20">
          <img
            className=" w-[160px] h-[160px] lg:w-[300px] lg:h-[300px]   object-cover rounded-full"
            src="398370146_1030009404969682_7618860168817513939_n.jpg"
            alt="Description of the image"
          />
        </div>
      </div>
    </div>
  );
}

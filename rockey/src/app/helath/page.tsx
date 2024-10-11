import { ComponentPhysic } from "@/components/chart-radar-default";
import NavbarDemo from "@/components/example/navbar-menu-demo";
import React from "react";

const Helathpage = () => {
  return (
    <div className="w-ful bg-gradient-to-br from-green-600 via-green-400 to-green-300 h-auto lg:h-[100vh]">
      <NavbarDemo />
      <div className="mt-40 lg:flex  h-auto md:px-20 w-full">
        <div className="lg:w-[60%] justify-center gap-5 flex">
          <div>
            <img className="h-48 w-48 cover" src="pngegg.png" />
            <h1 className="font-bold my-2">Achivement</h1>
            <li>
              <span>
                <span className="font-bold">800 meter:</span> 2min, 12sec
              </span>
            </li>
            <li>
              <span>
                <span className="font-bold">Most Push up:</span> 100{" "}
              </span>
            </li>
            <li>
              <span>
                <span className="font-bold">Most Set up:</span> 126{" "}
              </span>
            </li>
            <li>
              <span>
                <span className="font-bold">2 kilometer:</span> 7min, 14sec{" "}
              </span>
            </li>
            <li>
              <span>
                <span className="font-bold">Most Chin up:</span> 18
              </span>
            </li>
            <li>
              <span>
                <span className="font-bold">Plank:</span> 3min
              </span>
            </li>
          </div>
          <div className="px-3">
            <p className="font-bold mb-3">Physical Mesuarement</p>
            <p className="flex gap-10">
              <span>
                <span className="font-bold">Height:</span> 5.7ft (170 cm)
              </span>
            </p>
            <p className="flex gap-10">
              <span>
                <span className="font-bold">Weight:</span> 65kg (143 lbs)
              </span>
            </p>

            <p className="flex gap-10">
              <span>
                <span className="font-bold">Shoulder Width:</span> 17.5 inches
                (44.5 cm)
              </span>
            </p>
            <p className="flex gap-10">
              <span>
                <span className="font-bold">Chest Circumference:</span> 37
                inches (94 cm)
              </span>
            </p>

            <p className="flex gap-10">
              <span>
                <span className="font-bold">Waist Circumference:</span> 30
                inches (76 cm)
              </span>
            </p>
            <p className="flex gap-10">
              <span>
                <span className="font-bold">Arm Length:</span> 24 inches (61 cm)
              </span>
            </p>

            <p className="flex gap-10">
              <span>
                <span className="font-bold">Thigh Circumference:</span> 21
                inches (53 cm)
              </span>
            </p>
            <p className="flex gap-10">
              <span>
                <span className="font-bold">Hip Circumference:</span> 36 inches
                (91 cm)
              </span>
            </p>
          </div>
        </div>
        <div className="xl:w-[40%]">
          <ComponentPhysic />
        </div>
      </div>
    </div>
  );
};

export default Helathpage;

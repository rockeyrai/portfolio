import AnimatedPinDemo from "@/components/example/3d-pin-demo";
import NavbarDemo from "@/components/example/navbar-menu-demo";
import { PinContainer } from "@/components/ui/3d-pin";
import React from "react";

const Projectpage = () => {
  return (
    <div className="w-full bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-700 h-auto md:h-[100vh]">
      <NavbarDemo />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 mt-10 md:mt-40">
        <div className="h-[400px] w-full flex items-center justify-center ">
          <PinContainer
            title="eEcommerce-1"
            href="https://github.com/rockeyrai/Ecommerce-1"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              eEcommerce-1
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                This is my first eCommerce project built using the MERN stack.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
        <div className="h-[400px] w-full flex items-center justify-center ">
          <PinContainer
            title="playGround"
            href="https://github.com/rockeyrai/playGround"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              playGround
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                To enhance my side project and deepen my understanding of the MERN stack.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
        <div className="h-[400px] w-full flex items-center justify-center ">
          <PinContainer
            title="WorkoutTracker"
            href="https://github.com/rockeyrai/WorkoutTracker"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              WorkoutTracker
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                To effectively track workout progress and help achieve desired physical goal.                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
};

export default Projectpage;

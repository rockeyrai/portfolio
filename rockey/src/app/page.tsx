import BackgroundBoxesDemo from "@/components/example/background-boxes-demo";
import NavbarDemo from "@/components/example/navbar-menu-demo";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" relative max-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavbarDemo/>
      <Spotlight
       className=" absolute top-0 left-40 lg:left-50 md:left-80 md:top-0"
        fill="white"
      />
      <BackgroundBoxesDemo/>
    </div>
  );
}

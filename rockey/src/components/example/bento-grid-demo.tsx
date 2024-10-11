import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl md:mt-20 md:py-10 p-10 mt-10 mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
        src={item.src}
          key={i}
          title={item.title}
          description={item.description}
          // header={item.header}
          // icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          href={item.href}
        />
      ))}
    </BentoGrid>
  );
}
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
const items = [
  {
    title: "Songs",
    description: "Collection of Songs that I perfer to listen. ",

    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    href:'/',
    src:'ab67616d0000b2730cf1e9f4c93ec0fd60f1fe7e.jpg'
  },
  {
    title: "Games",
    description: "Collection of Games I have played till now.",

    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    href:'/',
        src:'pubg.png'
  },
  {
    title: "Books",
    description: "list of book I have read and recomend.",

    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    href:'/',
        src:'455bd7.png'
  },
  {
    title: "Movie & Series",
    description:
      "list of move and series that i like and recomend to other. It includes mix language, Anime, Drama, Document",

    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    href:'/',
        src:'1324016.jpeg'
  },
  {
    title: "Art",
    description: "Some of my Drawing i have drawn.",
    // header: <Skeleton />,
    // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    href:'/',
     src:'20190417_175932.jpg'
  },

];

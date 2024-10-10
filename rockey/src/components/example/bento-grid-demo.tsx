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
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",

    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    href:'/',
    src:'398370146_1030009404969682_7618860168817513939_n.jpg'
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",

    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    href:'/',
        src:'./398370146_1030009404969682_7618860168817513939_n.png'
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",

    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    href:'/',
        src:'398370146_1030009404969682_7618860168817513939_n.png'
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",

    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    href:'/',
        src:'398370146_1030009404969682_7618860168817513939_n.png'
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    // header: <Skeleton />,
    // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    href:'/',
     src:'398370146_1030009404969682_7618860168817513939_n.png'
  },

];

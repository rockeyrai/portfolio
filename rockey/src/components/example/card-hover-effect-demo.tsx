import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto mt-20 md:mt-40 px-8">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "Bachelor",
    description:
    <>
  College: Janadhar Community Campus <br />
    Faculty: Management (BBS) <br />
    Pass Year: Currently 2nd Year
  </>,
    link: "https://stripe.com",
  },
  {
    title: "School Leaving Certificate",
    description:
    <>
    College: Janasewa Secondary School <br />
    Faculty: Science<br />
    Pass Year: 2079 BS
  </>,
    link: "https://netflix.com",
  },
  {
    title: "Secondary Education Examination",
    description:
    <>
    College: Janasewa Secondary School <br />
    Faculty: SEE <br />
    Pass Year: 2076 BS
  </>,
    link: "https://google.com",
  },
];

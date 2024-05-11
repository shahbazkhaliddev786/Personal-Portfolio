"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
  // const { ref } = useSectionInView("About");

  return (
    <motion.section
      // ref={ref}
      className=" max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="p-3">
      I am a professional <span className="font-medium">MERN Stack Developer, T3 Stack(Next.ts, Typescript, Zod, TRPC, Prisma & Tailwind)</span>, Web Developer and Programmer and Degree 
      in <span className="font-medium">Computer Science BSCS from NUML University Islamabad, Pakistan</span>.
      I made many websites in different fields like business, e-commerce and travel, blog, 
      portfolio. I am skilled in HTML5, CSS3, SASS, Bootstrap 5, TailwindCSS, Material UI, 
      Chakra UI, Javascript/Typescript, React.js/Next.js, Redux-toolkit, React-Query, Node.js, 
      Express.js, MongoDB, SQL, Prisma, TRPC , Zod, GraphQL, Rest APIs and TypeSafe APIs.
      </p>      
     </motion.section>
  );
}
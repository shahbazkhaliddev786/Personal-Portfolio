import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Services",
    hash: "#service"
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "BS Computer Science",
//     location: "NUML University, Islamabad",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "E-commerce Website",
    description:
      "This is e-commerce website using MERN Stack",
    tags: ["React.ts", "Typescript", "MongoDB", "Tailwind", "Node.ts"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Business Website",
    description:
      "This is business website using MERN Stack",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer Motion"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML 5",
  "CSS 3",
  "Bootstrap 5",
  "TailwindCSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React.js/React.ts",
  "Next.js/Next.ts",
  "Redux-Toolkit/RTK-Query",
  "Node.js/Node.ts",
  "Express.js/Express.ts",
  "MongoDB",
  "SQL",
  "TypeSafe API",
  "REST API",
  "Git",
  "Prisma",
  "GraphQL",
  "TRPC",
  "Zod",
  "Framer Motion",
] as const;

export const servicesData = [
  "E-commerce Website",
  "Business Website",
  "Restaurant Website",
  "Blog Website",
  "Portfolio Website",
  "Custom website",
  "Web Applications",
  "Travel Website",
  "Web Development",
  "MERN Stack Development",
  "Full Stack Development",
  "Node.js REST API",
  "Front-End Development",
  "Back-End Development",
] as const;
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { servicesData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Services() {
//   const { ref } = useSectionInView("Skills");

  return (
    <section
      id="service"
    //   ref={ref}
      className="mt-[4rem] max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Services</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {servicesData.map((service, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 text-black dark:bg-black dark:text-white"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {service}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
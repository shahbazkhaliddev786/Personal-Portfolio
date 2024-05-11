"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import SubmitBtn from "./submitBtn";
// import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
// import SubmitBtn from "./submit-btn";
// import toast from "react-hot-toast";

export default function Contact() {
//   const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
    //   ref={ref}
      className="mb-20 mt-[4rem] sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-darkGray">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:shahbazkhalid818@gmail.com">
          shahbazkhalid818@gmail.com
        </a>
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={ async (formData) => {
          await sendEmail(formData);
          // const { data, error } =
          // if (error) {
          //   toast.error(error);
          //   return;
          // }
          // toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg placeholder:bg-white borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg placeholder:bg-white borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        {/* <SubmitBtn /> */}
        <button type="submit" className="bg-gray-900 text-white h-[3rem] w-[8rem] rounded-full">Submit</button>
      </form>
    </motion.section>
  );
}
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import { triggerAsyncId } from "async_hooks";
import { useForm } from "react-hook-form";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section
      id={`${SelectedPage.ContactUs}`}
      className="mx-auto w-5/6 pt-24 pb-32"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className=" md:w-3/5"
        >
          <HText>
            <span className="mr-2 text-primary-500">join now</span>to get in
            shape
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        {/* form and image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              action="shoagasraful4231@gmail.com"
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
            >
              <input
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
                name="name"
                type="text"
                placeholder="Name"
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}
              <input
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="my-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                </p>
              )}
              <textarea
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
                name="message"
                rows={4}
                cols={50}
                placeholder="Message"
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters"}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 uppercase transition duration-500 hover:bg-primary-500"
              >
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <div
              className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]
             md:before:content-evolvetext"
            >
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;

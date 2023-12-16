"use client";
import Image from "next/image";
import { Library } from "@/types/library";
import Link from "next/link";
import { motion } from "framer-motion";

const LibraryItem = ({ blog }: { blog: Library }) => {
  const { mainImage, title, href } = blog;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-13 pb-4"
      >
        <Link href={href} className="block relative aspect-[368/240]">
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="px-4">
          <h4 className="font-medium text-lg xl:text-itemtitle2 text-black hover:text-primary dark:hover:text-primary dark:text-white mt-7.5 mb-3.5">
            <Link href={href}>
              {" "}
              {`${title.slice(0, 40)}`}
            </Link>
          </h4>
        </div>
      </motion.div>
    </>
  );
};

export default LibraryItem;

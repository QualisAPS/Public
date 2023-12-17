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
            y: -20
          },

          visible: {
            opacity: 1,
            y: 0
          }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-13"
      >
        <Link href={href} className="block relative h-full">
          <Image width={331} height={466} src={mainImage} alt={title} />
        </Link>
      </motion.div>
    </>
  );
};

export default LibraryItem;

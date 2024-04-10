'use client';
import Image from 'next/image';
import { Blog } from '@/types/blog';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;

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
        className="animate_top rounded-lg border bg-white p-4 pb-9 shadow-solid-13 dark:bg-blacksection border-stroke"
      >
        <Link
          href="/noticia-qualis"
          className="relative block aspect-[368/239]"
        >
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="px-4">
          <h4 className="mb-3.5 mt-7.5 text-lg font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href="/noticia-qualis"> {`${title.slice(0, 40)}...`}</Link>
          </h4>
          <p>{metadata ? `${metadata.slice(0, 100)}...` : ''}</p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;

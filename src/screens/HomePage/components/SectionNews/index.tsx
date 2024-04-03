import React from "react";
import SectionHeader from "@/components/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./BlogData";

const SectionNews = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-25">
      <header className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: `Notícias & Artigos`,
              subtitle: `Notícias e Artigos`,
              description: `Confira aqui as últimas matérias e artigos do Qualis-APS.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </header>

      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
          {BlogData.slice(0, 3).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionNews;

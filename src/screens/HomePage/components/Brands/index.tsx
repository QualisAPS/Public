"use client";
import React from "react";
import SingleBrand from "./singleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-6">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex gap-12 justify-center items-center">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;

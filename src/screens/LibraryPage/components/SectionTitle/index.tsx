'use client';
import React from 'react';
import SectionHeader from '@/components/SectionHeader';

const SectionTitle = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-10">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: 'Biblioteca',
              subtitle: 'Biblioteca Digital',
              description: ``
            }}
          />
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default SectionTitle;

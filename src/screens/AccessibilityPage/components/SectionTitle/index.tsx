'use client';
import React from 'react';
import SectionHeader from '@/components/SectionHeader';

const SectionTitle = () => {
  return (
    <section id="features" className="py-10">
      <header className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: 'Acessibilidade',
            subtitle: 'Acessibilidade Digital',
            description: ``
          }}
        />
      </header>
    </section>
  );
};

export default SectionTitle;

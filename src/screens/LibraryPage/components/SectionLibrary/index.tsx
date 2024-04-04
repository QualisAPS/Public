'use client';

import React, { useEffect, useState } from 'react';
import LibraryItem from './LibraryItem';
import libraryData from './libraryData';
import { useSearchParams } from 'next/navigation';

const SectionLibrary = () => {
  const [filteredData, setFilteredData] = useState(libraryData);
  const searchParams = useSearchParams();

  useEffect(() => {
    const year = searchParams.get('ano');
    const title = searchParams.get('titulo');
    let tempData = libraryData;

    if (year && year !== '0') {
      tempData = tempData.filter((item) => item.year === year);
    }

    if (title) {
      tempData = tempData.filter((item) =>
        item.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    setFilteredData(tempData);
  }, [searchParams]);

  return (
    <section>
      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {filteredData.slice(0, 45).map((blog, key) => (
              <LibraryItem blog={blog} key={key} />
            ))}
          </div>
        ) : (
          <p className="w-full text-center">Nenhum resultado encontrado.</p>
        )}
      </div>
    </section>
  );
};

export default SectionLibrary;

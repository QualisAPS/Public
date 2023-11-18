import React from 'react';
import LibraryItem from './LibraryItem';
import libraryData from './libraryData';

const SectionLibrary = async () => {
  return (
    <section>
      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {libraryData.slice(0, 6).map((blog, key) => (
            <LibraryItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionLibrary;

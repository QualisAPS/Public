import NewsCard from '@/components/NewsCard';
import Pagination from '@/components/Pagination';

export default function WrapperNews() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 grid-rows-2 gap-7 lg:grid-cols-3">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <footer className="mt-12 flex justify-center">
        <Pagination />
      </footer>
    </section>
  );
}

import Link from 'next/link';
import Image from 'next/image';

export default function NewsCard() {
  return (
    <article className="max-w-sm rounded-xl bg-white shadow-lg">
      <div>
        <Link href="#">
          <Image
            src="/static/news.jpg"
            alt=""
            width={400}
            height={200}
            className="rounded-xl"
          />
        </Link>
        <div className="flex flex-col gap-3 p-4">
          <h3 className="text-lg font-medium text-[#141414] sm:text-xl">
            Lorem ipsum dolor
          </h3>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
          <Link
            href="/sobre"
            className=" max-w-[40%] rounded-xl bg-yellow p-2 text-center text-lg font-medium text-[#141414]"
          >
            Saiba Mais
          </Link>
        </div>
      </div>
    </article>
  );
}

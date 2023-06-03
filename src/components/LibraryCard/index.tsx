import Link from 'next/link';
import Image from 'next/image';

export default function LibraryCard() {
  return (
    <article className="max-w-sm rounded-xl bg-white shadow-lg">
      <div>
        <Link href="#">
          <Image
            src="/static/library.png"
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
          <Link
            href="/biblioteca"
            className=" max-w-[50%] rounded-xl bg-yellow p-2 text-center text-lg font-medium text-[#141414]"
          >
            Acesse o arquivo
          </Link>
        </div>
      </div>
    </article>
  );
}

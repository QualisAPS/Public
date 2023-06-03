import Image from 'next/image';

export default function Sponsors() {
  return (
    <article className="max-w-sm rounded-xl bg-white shadow-lg">
      <div className="p-4">
        <Image
          src="/static/sponsors/unb.png"
          alt="logo da unb"
          width={140}
          height={140}
        />
      </div>
    </article>
  );
}

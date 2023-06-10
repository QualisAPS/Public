import Image from 'next/image';
import { ISponsors } from '@/interfaces/ISponsors';

export default function Sponsors({ src, alt }: ISponsors) {
  return (
    <article className="max-w-sm rounded-xl bg-white shadow-lg">
      <div className="p-4">
        <Image src={src} alt={alt} width={140} height={140} />
      </div>
    </article>
  );
}

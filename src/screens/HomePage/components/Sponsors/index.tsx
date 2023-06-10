import { MdBrandingWatermark } from 'react-icons/md';
import Sponsors from '@/components/Sponsors';

export default function SponsorsSection() {
  return (
    <section className="mx-auto mt-11 max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      <header className="flex items-center gap-4 rounded-2xl bg-green p-2">
        <MdBrandingWatermark className="text-5xl" aria-hidden="true" />
        <h2 className="text-2xl font-medium text-[#141414] md:text-4xl">
          Patrocinadores
        </h2>
      </header>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-between">
        <Sponsors src="/static/sponsors/unb.png" alt="logo da unb" />
        <Sponsors src="/static/sponsors/fiocruz.png" alt="logo da fiocruz" />
        <Sponsors src="/static/sponsors/sus.png" alt="logo do sus" />
        <Sponsors
          src="/static/sponsors/gdf.png"
          alt="logo da secretaria de saude do Distrito Federal"
        />
      </div>
    </section>
  );
}

import Image from "next/image";

type Props = { src: string; alt: string; caption: string };

/** Below-the-fold product image: lazy by default (no `preload`/`priority`), responsive sizes, explicit dimensions (no CLS). */
export function Showcase({ src, alt, caption }: Props) {
  return (
    <figure className="relative overflow-hidden rounded-3xl border border-slate-200/90 shadow-xl bg-slate-100">
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={747}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        className="w-full h-auto object-cover object-center"
      />
      <figcaption className="text-center text-xs text-slate-500 py-2.5 bg-slate-50/90 border-t border-slate-100">
        {caption}
      </figcaption>
    </figure>
  );
}

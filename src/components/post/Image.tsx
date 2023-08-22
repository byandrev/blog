import NextImage from "next/image";

export default function Image({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="img w-full mt-6 mb-12">
      <NextImage
        src={src}
        alt={alt}
        fill={true}
        className="rounded-md shadow-2xl shadow-gray-300 dark:shadow-slate-900"
      />

      <p className="text-center text-xs mt-4 text-gray-700 dark:text-white">
        {alt}
      </p>
    </div>
  );
}
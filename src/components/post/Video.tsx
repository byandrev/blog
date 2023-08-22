export default function Video({
  src,
  alt,
  autoPlay = false,
  loop = false,
}: {
  src: string;
  alt: string;
  autoPlay?: boolean;
  loop?: boolean;
}) {
  return (
    <div className="w-full mt-6 mb-12">
      <video
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        className="rounded-md shadow-2xl shadow-gray-300 dark:shadow-slate-900"
      />

      <p className="text-center text-xs mt-4 text-gray-700 dark:text-white">
        {alt}
      </p>
    </div>
  );
}
import Image, { StaticImageData } from "next/image";
import placeholderImage from "@/placeholder-image.png";

export default function testimony({
  testimonyImage,
  testimonyName,
  testimonyText,
  testimonySubtitle,
}: {
  testimonyImage?: StaticImageData;
  testimonyName?: string;
  testimonyText?: string;
  testimonySubtitle?: string;
}) {
  return (
    <div className="relative flex max-w-3xl flex-col items-center gap-2 rounded-lg border border-gray-200 bg-primaryLight p-12 text-sm shadow-md">
      <Image
        className="absolute size-24 -translate-y-full transform rounded-full object-cover shadow-lg ring-2 ring-white"
        src={testimonyImage ?? placeholderImage}
        alt="user image"
      />
      <h5 className="text-xl font-medium text-gray-900">
        {testimonyName ?? "theCookBook User"}
      </h5>
      <h6 className="text-slate-400">{testimonySubtitle}</h6>
      <span className="text-gray-700">{testimonyText}</span>
    </div>
  );
}

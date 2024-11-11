import Image, { StaticImageData } from "next/image";
import placeholderImage from "../../../public/placeholder-image.png";

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
    <>
      <div className="relative bg-[#A7E4AF] flex rounded-lg border max-w-4xl border-gray-200 shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col">
        <div className="flex h-full justify-center gap-4 p-6">
          <div className="flex flex-col items-center">
            <Image
              className="mb-3 h-24 w-24 rounded-full shadow-lg ring-2 ring-white  object-cover
                    absolute transform -translate-y-full"
              src={testimonyImage || placeholderImage}
              alt="Bonnie image"
            />
            <h5 className="mt-3 text-xl font-medium text-gray-900 dark:text-white">
              {testimonyName || "theCookBook User"}
            </h5>
            <h6 className=" text-slate-400  text-sm ">{testimonySubtitle}</h6>
            <span className=" mt-1 text-sm text-gray-700 dark:text-gray-400 text-center whitespace-pre-line">
              {testimonyText ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

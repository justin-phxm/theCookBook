export default function callToAction({
  callToActionHeader,
  callToActionHeaderSm,
  callToActionMessage,
}: {
  callToActionHeader?: string;
  callToActionHeaderSm?: string;
  callToActionMessage?: string;
}) {
  return (
    <div className="-mt-2 w-full p-2 lg:mt-0">
      <div className="rounded-3xl bg-gradient-to-r from-[#A7E4AF] to-[#F3E699] py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
        <div className="mx-auto max-w-xs">
          <p className="text-base font-semibold text-black">
            {callToActionHeaderSm}
          </p>
          <p className="mt-6 flex items-baseline justify-center gap-x-2">
            <span className="text-4xl font-bold tracking-tight text-black">
              {callToActionHeader}
            </span>
          </p>
          <p className="mt-6 text-base font-normal text-slate-400">
            {callToActionMessage}
          </p>
          <a
            href="#"
            className="mt-10 block w-full rounded-md bg-[#53AD3C] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#A7E4AF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#53AD3C]"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </div>
  );
}

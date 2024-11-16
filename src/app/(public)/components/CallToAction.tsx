import NavigationButton from "./NavigationButton";

export default function callToAction({
  callToActionHeader,
  callToActionHeaderSm,
  callToActionMessage,
  link,
  linkMessage,
}: {
  callToActionHeader?: string;
  callToActionHeaderSm?: string;
  callToActionMessage?: string;
  link?: string;
  linkMessage?: string;
}) {
  return (
    <div className="flex w-full rounded-3xl bg-gradient-to-r from-primaryLight to-[#F3E699] py-10 text-center lg:flex-col lg:justify-center">
      <div className="mx-auto max-w-xs">
        <p className="text-base font-semibold">{callToActionHeaderSm}</p>
        <p className="text-4xl font-bold tracking-tight">
          {callToActionHeader}
        </p>
        <p className="text-base font-normal text-slate-400">
          {callToActionMessage}
        </p>
        <NavigationButton link={link} text={linkMessage} />
      </div>
    </div>
  );
}

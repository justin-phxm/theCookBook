import Link from "next/link";
import React from "react";

export default function NavigationButton({
  link,
  text,
}: {
  link?: string;
  text?: string;
}) {
  return (
    <Link
      href={link ?? "#"}
      className="mt-2 block w-full rounded-md bg-primary2 py-2 text-center text-xl font-semibold text-white hover:bg-primaryLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[primary2]"
    >
      {text ?? "Get Started"}
    </Link>
  );
}

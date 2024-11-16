import React from "react";
import { FooterLinks } from "./Footer";
import Link from "next/link";

export default function SocialIcons({
  footerLinks,
}: {
  footerLinks: FooterLinks[];
}) {
  return (
    <div className="flex gap-6 sm:justify-center">
      {footerLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            className="text-gray-500 transition-all duration-500 hover:text-gray-700"
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
}

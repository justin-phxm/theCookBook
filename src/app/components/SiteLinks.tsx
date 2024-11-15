import Link from "next/link";
import { FooterSection } from "./footer";

export default function SiteLinks({
  footerSections,
}: {
  footerSections: FooterSection[];
}) {
  return (
    <div className="flex w-full flex-wrap gap-24 text-sm">
      {footerSections.map((section, index) => {
        return (
          <div key={index}>
            <div>{section.sectionName}</div>
            <ul className="flex flex-col gap-2">
              {section.links.map((link, index) => {
                return (
                  <li key={index}>
                    <Link href={link.href} className="hover:underline">
                      {link.socialSite}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

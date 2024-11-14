import { Footer } from "flowbite-react";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsDiscord,
  BsBookFill,
} from "react-icons/bs";
interface FooterProps {
  href: string;
  socialSite: string;
}
type FooterLinks = FooterProps & { icon: IconType };
const footerLinks: FooterLinks[] = [
  {
    href: "https://www.instagram.com/justinphxm/",
    icon: BsInstagram,
    socialSite: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/justin-pham-32a309153/",
    icon: BsLinkedin,
    socialSite: "LinkedIn",
  },
  {
    href: "",
    icon: BsDiscord,
    socialSite: "Discord",
  },
  {
    href: "#",
    icon: BsTwitter,
    socialSite: "Twitter",
  },
  {
    href: "https://github.com/justin-phxm/theCookBook",
    icon: BsGithub,
    socialSite: "Github",
  },
];
const siteLinks: FooterProps[] = [
  {
    href: "/",
    socialSite: "Browse Recipes",
  },
  {
    href: "/",
    socialSite: "Make Recipes",
  },
  {
    href: "/",
    socialSite: "Save Recipes",
  },
];
const legal: FooterProps[] = [
  {
    href: "/",
    socialSite: "Privacy Policy",
  },
  {
    href: "/",
    socialSite: "Terms & Conditions",
  },
];
type FooterSection = { sectionName: string; links: FooterProps[] };
const footerSections: FooterSection[] = [
  { sectionName: "Follow Us", links: footerLinks },
  { sectionName: "Profile", links: siteLinks },
  { sectionName: "Legal", links: legal },
];
export default function footer() {
  return (
    <footer className="flex w-full flex-col gap-6 rounded-lg bg-inherit p-6 text-gray-500 dark:bg-gray-800 dark:text-gray-400 md:items-center md:justify-between">
      <Link href="/" className="flex items-center">
        <BsBookFill className="mr-3 h-8" />
        <span
          data-testid="flowbite-footer-brand-span"
          className="self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
        >
          TheCookBook
        </span>
      </Link>
      <div className="grid w-full grid-cols-2 gap-8 text-sm dark:text-white sm:grid-cols-3 sm:gap-6">
        {footerSections.map((section, index) => {
          return (
            <div key={index}>
              <Footer.Title title={section.sectionName} />
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
      <Footer.Divider />
      <div className="flex w-full gap-2 sm:items-center sm:justify-between">
        <div className="flex gap-2">
          <div className="sm:text-center">© 2023</div>
          <Link href="/" className="hover:underline">
            TheCookBook™
          </Link>
        </div>
        <div className="flex gap-6 sm:justify-center">
          {footerLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                className="text-gray-500 transition-all duration-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-400"
              >
                <Icon />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

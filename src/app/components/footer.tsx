import { Footer } from "flowbite-react";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  BsBookFill,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsDiscord,
} from "react-icons/bs";
import SiteLinks from "./SiteLinks";
import SocialIcons from "./SocialIcons";
export interface FooterProps {
  href: string;
  socialSite: string;
}
export type FooterSection = { sectionName: string; links: FooterProps[] };
export type FooterLinks = FooterProps & { icon: IconType };
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
const footerSections: FooterSection[] = [
  { sectionName: "Follow Us", links: footerLinks },
  { sectionName: "Profile", links: siteLinks },
  { sectionName: "Legal", links: legal },
];
export default function footer() {
  return (
    <footer className="flex w-full flex-col gap-6 rounded-lg bg-gray-800 bg-inherit p-6 text-gray-400 md:items-center md:justify-between">
      <Link href="/" className="flex items-center gap-2">
        <BsBookFill className="h-8" />
        <span className="text-2xl font-semibold text-gray-800">
          TheCookBook
        </span>
      </Link>
      <SiteLinks footerSections={footerSections} />
      <Footer.Divider />
      <div className="flex w-full gap-2 sm:items-center sm:justify-between">
        <div className="flex gap-2">
          <div className="sm:text-center">© 2024</div>
          <Link href="/" className="hover:underline">
            TheCookBook™
          </Link>
        </div>
        <SocialIcons footerLinks={footerLinks} />
      </div>
    </footer>
  );
}

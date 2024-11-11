import { Footer } from "flowbite-react";
import Link from "next/link";
import {
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsDiscord,
  BsBookFill,
} from "react-icons/bs";

export default function footer() {
  return (
    <>
      <footer className="w-full rounded-lg bg-inherit dark:bg-gray-800 md:flex md:items-center md:justify-between p-6 ">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Link href="/" className="mb-4 flex items-center sm:mb-0">
                <BsBookFill className="mr-3 h-8" />
                <span
                  data-testid="flowbite-footer-brand-span"
                  className="self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
                >
                  TheCookBook
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <h2
                  data-testid="flowbite-footer-title"
                  className="mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
                >
                  Profile
                </h2>
                <ul
                  data-testid="footer-groupLink"
                  className="flex flex-wrap text-sm text-gray-500 dark:text-white flex-col space-y-4"
                >
                  <li className="last:mr-0 md:mr-6">
                    <Link href="#" className="hover:underline">
                      Browse Recipes
                    </Link>
                  </li>
                  <li className="last:mr-0 md:mr-6">
                    <Link href="#" className="hover:underline">
                      Make Recipes
                    </Link>
                  </li>
                  <li className="last:mr-0 md:mr-6">
                    <Link href="#" className="hover:underline">
                      Save Recipes
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <ul
                  data-testid="footer-groupLink"
                  className="flex flex-wrap text-sm text-gray-500 dark:text-white flex-col space-y-4"
                >
                  <li className="last:mr-0 md:mr-6">
                    <Link
                      href="https://github.com/justin-phxm/theCookBook"
                      className="hover:underline"
                      target="_blank"
                    >
                      Github
                    </Link>
                  </li>
                  <li className="last:mr-0 md:mr-6">
                    <Link href="#" className="hover:underline">
                      Discord
                    </Link>
                  </li>
                  <li className="last:mr-0 md:mr-6">
                    <Link href="#" className="hover:underline">
                      Email
                    </Link>
                  </li>
                  <li className="last:mr-0 md:mr-6">
                    <Link
                      href="https://www.linkedin.com/in/justin-pham-32a309153/"
                      target="_blank"
                      className="hover:underline"
                    >
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <ul
                  data-testid="footer-groupLink"
                  className="flex flex-wrap text-sm text-gray-500 dark:text-white flex-col space-y-4"
                >
                  <li className="last:mr-0 md:mr-6">
                    <Link href="#" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="last:mr-0 md:mr-6">
                    <Link href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <div
              data-testid="flowbite-footer-copyright"
              className="text-sm text-gray-500 dark:text-gray-400 sm:text-center"
            >
              © 2023
              <Link href="/" className="ml-1 hover:underline">
                TheCookBook™
              </Link>
            </div>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsDiscord} />
              <Footer.Icon
                href="https://www.instagram.com/justinphxm/"
                target="_blank"
                icon={BsInstagram}
              />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon
                href="https://www.linkedin.com/in/justin-pham-32a309153/"
                target="_blank"
                icon={BsLinkedin}
              />
              <Footer.Icon
                href="https://github.com/justin-phxm/theCookBook"
                target="_blank"
                icon={BsGithub}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

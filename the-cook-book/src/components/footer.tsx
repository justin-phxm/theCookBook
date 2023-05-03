import { Footer} from 'flowbite-react'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin, BsDiscord, BsBookFill } from "react-icons/bs";
import Image from 'next/image';

export default function footer() {
    return (<>
        <footer className='w-full rounded-lg dark:bg-gray-800 md:flex md:items-center md:justify-between p-6  bg-inherit border-0  border-inherit'  >
        <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
                <a href="/" className="mb-4 flex items-center sm:mb-0">
                    <BsBookFill className="mr-3 h-8"/>
                    <span data-testid="flowbite-footer-brand-span" 
                    className="self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white">TheCookBook</span>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                <Footer.Title title="Profile" />
                <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">
                    Browse Recipes
                    </Footer.Link>
                    <Footer.Link href="#">
                    Make Recipes
                    </Footer.Link>
                    <Footer.Link href="#">
                    Save Recipes
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">
                    Github
                    </Footer.Link>
                    <Footer.Link href="#">
                    Discord
                    </Footer.Link>
                    <Footer.Link href="#">
                    Email
                    </Footer.Link>
                    <Footer.Link href="#">
                    LinkedIn
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">
                    Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                    Terms & Conditions
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
            </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
                href="/"
                by="TheCookBook™"
                year={2023}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon
                href="#"
                icon={BsDiscord}
                />
                <Footer.Icon
                href="#"
                icon={BsInstagram}
                />
                <Footer.Icon
                href="#"
                icon={BsTwitter}
                />
                <Footer.Icon
                href="#"
                icon={BsLinkedin}
                />
                <Footer.Icon
                href="#"
                icon={BsGithub}
                />
            </div>
            </div>
        </div>
        </footer>
    </>)
}

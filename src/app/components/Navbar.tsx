import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";

export default function Navbar() {
    return <header className="w-11/12 m-auto p-4 px-14 flex items-center justify-between">
        <Logo />

        <nav 
            className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex 
            items-center fixed top-8 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-20"
        >
            <Link href="/" className="mx-2 hover:underline">Home</Link>
            <Link href="/blog" className="mx-3 hover:underline">Blogs</Link>
            <Link href="/contact" className="mx-2 hover:underline">Contato</Link>
        </nav>

        <div>
            <a href="#" className="inline-block w-6 h-6 mx-3">
                <LinkedinIcon className="hover:scale-125 transition-all ease duration-200"/>
            </a>
            <a href="#" className="inline-block w-6 h-6 mx-3">
                <TwitterIcon className="hover:scale-125 transition-all ease duration-200"/>
            </a>
            <a href="#" className="inline-block w-6 h-6 mx-3">
                <GithubIcon className="hover:scale-125 transition-all ease duration-200"/>
            </a>
        </div>
    </header>
}
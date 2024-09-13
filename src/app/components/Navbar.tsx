import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { ToggleButton } from "./ToggleButton";

export default function Navbar() {
    return <header className="w-10/12 mx-auto p-4 px-12 flex items-center justify-between">
        <Logo />

        <nav 
            className="w-max py-3 px-8 border border-solid bg-primary/85 text-secondary rounded-full font-medium capitalize 
            flex items-center fixed top-8 right-1/2 translate-x-1/2 backdrop-blur-sm z-20"
        >
            <Link href="/" className="mx-2 hover:scale-105 transition-all ease duration-100">Home</Link>
            <Link href="/blog" className="mx-3 hover:scale-105 transition-all ease duration-100">Blogs</Link>
            <Link href="/about" className="mx-2 hover:scale-105 transition-all ease duration-100">Sobre</Link>
        </nav>

        <div className="hidden md:flex items-center">
            <a href="https://www.linkedin.com/in/lucas-salgado-2a1448254/" target="_blank" className="inline-block w-6 h-6 mx-3">
                <LinkedinIcon className="hover:scale-125 transition-all ease duration-200"/>
            </a>
            <a href="https://github.com/lucasSSalgado" target="_blank" className="inline-block w-6 h-6 mx-3">
                <GithubIcon className="hover:scale-125 transition-all ease duration-200"/>
            </a>
            <a href="https://x.com/lucssslucsss" target="_blank" className="inline-block w-6 h-6 mx-3">
                <TwitterIcon className="hover:scale-125 transition-all ease duration-200"/>
            </a>
            <ToggleButton />
        </div>
    </header>
}
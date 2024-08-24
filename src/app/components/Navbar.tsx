import Link from "next/link";

export default function Navbar() {
    return <header className="pt-3 pb-1 flex">
        <Link href="/" className="bg-slate-700 ml-4">Home</Link>

        <nav className="p-4 w-4/12 mx-auto bg-zinc-600 rounded-lg">
            <ul className="flex gap-2 justify-evenly">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/blog'>Blog</Link></li>
                <li><Link href='/contact'>Contato</Link></li>
            </ul>
        </nav>
    </header>
}
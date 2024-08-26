import Link from "next/link";
import Image from "next/image";
import LogoImage from '../../../public/profile-img.png'

export default function Logo() {
    return <Link href="/" className="flex items-center text-dark">
        <div className="w-16 rounded-full overflow-hidden border border-solid border-dark m-4">
            <Image src={LogoImage} alt="Logo" className="w-full h-auto rounded-full"/>
        </div>
        <span className="font-bold text-xl">CodeBlocks</span>
    </Link>
}
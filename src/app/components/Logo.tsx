import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import LogoImage from '../../../public/images/profile-img.png'

export default function Logo() {
    return <Link href="/" className="items-center  hidden md:flex">
        <div className="w-16 rounded-full overflow-hidden border border-solid border-dark m-4">
            <ExportedImage src={ LogoImage } alt="Logo" className="w-full h-auto rounded-full"/>
        </div>
        <span className="font-bold text-xl">L.S.</span>
    </Link>
}
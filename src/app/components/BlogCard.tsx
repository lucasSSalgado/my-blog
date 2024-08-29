import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { metaData } from "../../../types"
import { capilizeFirstLetter, formatDate, formatTextIfBig } from "@/utils/utils"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"

interface Porps extends metaData {
    folder: string
    filename: string
}

export default function BlogCard({ title, description, date, image, folder, filename }: Porps) {
    const url = `/blog/${folder}/${filename}`

    return <div className="relative rounded-xl h-[12rem] overflow-hidden border border-solid border-dark">
        <Card className="flex flex-col">
            <div className="absolute inset-0 z-0">
                <ExportedImage
                    src={image}
                    alt="Background Image"
                    fill
                    className="object-cover"
                />
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            </div>
            <CardHeader className="relative z-1 text-white">
                <CardTitle className="text-2xl font-bold">
                    <Link 
                        className="underline-animation [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_4px_8px_rgba(0,0,0,0.6),_0_8px_16px_rgba(0,0,0,0.4)]" 
                        href={url}
                    >
                       { capilizeFirstLetter(title) }
                    </Link>
                </CardTitle>
                <CardDescription 
                    className="pt-1 min-h-14 max-h-14 text-zinc-100 font-semibold [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_4px_8px_rgba(0,0,0,0.6),_0_8px_16px_rgba(0,0,0,0.4)]"
                >
                    { formatTextIfBig(description) }
                </CardDescription>
            </CardHeader>
            <CardFooter className="relative z-20 mt-auto text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_4px_8px_rgba(0,0,0,0.6),_0_8px_16px_rgba(0,0,0,0.4)]">
                <p>{ formatDate(date) }</p>
                <Link className="ml-auto underline-animation" href={url}>Leia mais...</Link>
            </CardFooter>
        </Card>
    </div>
}
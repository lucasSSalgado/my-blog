import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { capilizeFirstLetter } from "@/utils/utils"
import ExportedImage from "next-image-export-optimizer"
import Link from "next/link"

interface Props {
    title: string
    description: string
    image: string
}

export default function FolderCard({ title, description, image }: Props) {
    return <div>
        <Card className="relative mx-auto rounded-xl overflow-hidden border border-solid border-dark">
            <div className="absolute inset-0 z-0">
                <ExportedImage
                    src={image}
                    alt="Background Image"
                    fill
                    className="object-cover shadow-lg"
                />
            </div>
            <CardHeader className="relative z-10 text-white">
                <CardTitle className="text-3xl font-bold">
                    <Link href={`/blog/${title}`}>{ capilizeFirstLetter(title) }</Link>
                </CardTitle>
                <CardDescription className="pt-5 text-white">
                    { capilizeFirstLetter(description) }
                </CardDescription>
            </CardHeader>
        </Card>
    </div>
}
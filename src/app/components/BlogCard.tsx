import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { metaData } from "../../../types"
import { capilizeFirstLetter, formatDate } from "../utils/utils"
import Link from "next/link"

interface Porps extends metaData {
    folder: string
    filename: string
}

export default function BlogCard({ title, description, date, image, folder, filename }: Porps) {
    return <div>
        <Card>
            <CardHeader>
                <CardTitle>{ capilizeFirstLetter(title) }</CardTitle>
                <CardDescription>{ capilizeFirstLetter(description) }</CardDescription>
            </CardHeader>
            <CardFooter>
                <p>{ formatDate(date) }</p>
                <Link className="ml-auto" href={`/posts/${folder}/${filename}`}>Leia mais...</Link>
            </CardFooter>
        </Card>
    </div>
}
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { capilizeFirstLetter } from "../utils/utils"
import Link from "next/link"

interface Props {
    title: string
    description: string
    image: string
}

export default function FolderCard({ title, description, image }: Props) {
    return <div>
        <Card>
            <CardHeader>
                <CardTitle>{ capilizeFirstLetter(title) }</CardTitle>
                <CardDescription>{ capilizeFirstLetter(description) }</CardDescription>
            </CardHeader>
        </Card>
    </div>
}
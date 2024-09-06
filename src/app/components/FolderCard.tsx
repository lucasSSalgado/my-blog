import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { addInderlineInTitle, capilizeFirstLetter } from "@/utils/utils"
import ExportedImage from "next-image-export-optimizer"
import Link from "next/link"

interface Props {
    title: string
    description: string
    image: string
}

export default function FolderCard({ title, description, image }: Props) {

    return <div>
      <Card className="relative rounded-xl overflow-hidden border border-solid border-dark h-56">
        <div className="absolute inset-0 z-0">
          <ExportedImage
            src={image}
            alt="Background Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        </div>
        <CardHeader className="relative z-10 text-white h-full">
          <CardTitle className="text-3xl font-bold mb-auto">
            <Link
              className="underline-animation [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_4px_8px_rgba(0,0,0,0.6),_0_8px_16px_rgba(0,0,0,0.4)]"
              href={`/blog/${addInderlineInTitle(title)}`}
            >
              {capilizeFirstLetter(title)}
            </Link>
          </CardTitle>
          <CardDescription className=" text-zinc-100 text-lg font-semibold [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_4px_8px_rgba(0,0,0,0.6),_0_8px_16px_rgba(0,0,0,0.4)]">
            { capilizeFirstLetter(description) }
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
}
import { capilizeFirstLetter, formatDate, getLastPost } from "@/utils/utils";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export default function Home() {
  let post = getLastPost();

  return (
    <main>
      <div className="relative w-11/12 mx-auto p-4 rounded-3xl overflow-hidden mt-5 border border-solid border-dark shadow-lg shadow-zinc-500/50">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ExportedImage
            src={post.metaData.image}
            alt="Background Image"
            fill
            className="object-cover shadow-lg"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 p-6">
          <h1 className="text-5xl font-bold text-white">
            <Link href={post.path}>
              { capilizeFirstLetter(post.metaData.title) }
            </Link>
          </h1>

          <div className="flex gap-2 justify-between mt-10">
            <p className="text-xl font-bold text-white">{post.metaData.description}</p>
            <p className="text-xl font-bold text-white">{ formatDate(post.metaData.date) }</p>
          </div>
        </div>
      </div>
    </main>
  );
}

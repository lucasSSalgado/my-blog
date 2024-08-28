import { capilizeFirstLetter, formatDate, getLastPost } from "@/utils/utils";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export default function Home() {
  let post = getLastPost();

  return (
    <main>
      <div className="relative w-11/12 mx-auto py-5 px-14 rounded-3xl overflow-hidden mt-5 border border-solid border-dark shadow-lg shadow-zinc-500/50">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ExportedImage
            src={post.metaData.image}
            alt="Background Image"
            fill
            className="object-cover shadow-lg"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10">
          <div className="flex justify-between">
            <h1 className="text-5xl font-bold text-white underline-animation">
              <Link href={post.blogPath}>
                { capilizeFirstLetter(post.metaData.title) }
              </Link>
            </h1>

            <Link 
              className="group inline-block rounded-full bg-gradient-to-r from-violet-600 via-blue-300 to-emerald-500 p-[2px]" 
              href={post.folderPath}
            >
              <span className="block rounded-full bg-zinc-700 text-white p-3 text-sm font-medium hover:underline">
                { capilizeFirstLetter(post.folderName) }
              </span>
            </Link>
          </div>

          <div className="flex gap-2 justify-between mt-20">
            <p className="text-xl font-bold text-white">{ post.metaData.description }</p>
            <p className="text-xl font-bold text-white">{ formatDate(post.metaData.date) }</p>
          </div>
        </div>
      </div>
      <p>
        asdasdas <br />
      </p>
      <p>
        asdasdas <br />
      </p>
      <p>
        asdasdas <br />
      </p>
      <p>
        asdasdas <br />
      </p>
      <p>
        asdasdas <br />
      </p>
      <p>
        asdasdas <br />
      </p>
      <p>
        asdasdas <br />
      </p>


      <p>
        asdasdas <br />
      </p>
      <p>
        asdasdas <br />
      </p>
      <p>
        asdasdas <br />
      </p>
      <p>
        asdasdas <br />
      </p>
      <p>
        asdasdas <br />
      </p>
      <p>
        asdasdas <br />
      </p>
      <p>
        asdasdas <br />
      </p><p>
        asdasdas <br />
      </p>

      <p>
        asdasdas <br />
      </p>
      <p>
        asdasdas <br />
      </p><p>
        asdasdas <br />
      </p>

    </main>
  );
}

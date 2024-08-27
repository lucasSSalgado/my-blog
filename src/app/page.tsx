import { capilizeFirstLetter, getLastPost } from "@/utils/utils";
import testeImage from '../../public/teste.jpg'

export default function Home() {
  let post = getLastPost()

  return (
    <main>
      {/* latest blog */}
      <div className="w-11/12 m-auto p-4 rounded overflow-hidden shadow-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${testeImage.src})` }}>
        <h1 className="text-5xl font-bold">{ capilizeFirstLetter(post.metaData.title) }</h1>
        <div className="bg-black bg-opacity-50 p-6">
          <p className="text-gray-200 text-base">{post.metaData.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-800 bg-opacity-75 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            {new Date(post.metaData.date).toLocaleDateString()}
          </span>
      </div>
      </div>
    </main>
  );
}

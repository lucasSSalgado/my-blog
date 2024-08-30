import { getAllBlogs } from "@/utils/utils"
import BlogCard from "./BlogCard"

export default function LatestArticles() {
    const blogs = getAllBlogs()
    const lastSix = blogs.slice(0, 6)
    lastSix.sort((a, b) => new Date(b.metaData.date).getTime() - new Date(a.metaData.date).getTime())

    return (
        <div className="mt-14 mb-10">
            <h2 className="font-semibold text-3xl mb-4">Últimos Artigos:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {
                    lastSix.map(blog => (
                        <BlogCard 
                            key={blog.metaData.title}
                            title={blog.metaData.title}
                            description={blog.metaData.description}
                            image={blog.metaData.image}
                            date={blog.metaData.date}
                            filename={blog.fileName}
                            folder={blog.folderName}
                        />
                    ))
                }
            </div>
        </div>
    )
}
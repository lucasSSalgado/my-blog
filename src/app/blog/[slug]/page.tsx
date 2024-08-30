import BlogCard from "@/app/components/BlogCard"
import { capilizeFirstLetter, getAllBlogs } from "@/utils/utils"

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params
    const blogs = getAllBlogs()
    const allSlugBlogs = blogs.filter(blog => blog.folderName === slug)
    allSlugBlogs.sort((a, b) => (a.metaData.date > b.metaData.date) ? -1 : 1)
    
    return <div className="p-5">
        <h2 className="font-semibold text-3xl underlined-text"> 
            { capilizeFirstLetter(slug) }: 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
            { allSlugBlogs.map((blog) => (
                <BlogCard 
                    key={blog.metaData.title} 
                    {...blog.metaData} 
                    folder={blog.folderName} 
                    filename={blog.fileName} 
                />
            ))}
        </div>
    </div> 
}

export function generateStaticParams() {
    const blogs = getAllBlogs()
    const slugs = blogs.map((blog) => {
        return { slug: blog.folderName }
    })

    return slugs
}
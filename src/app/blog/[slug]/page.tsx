import BlogCard from "@/app/components/BlogCard"
import { getAllBlogs } from "../../utils/utils"

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params
    const blogs = getAllBlogs()
    const allSlugBlogs = blogs.filter(blog => blog.folderName === slug)
    
    return <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-7">
        { allSlugBlogs.map((blog) => (
            <BlogCard 
                key={blog.metaData.title} 
                {...blog.metaData} 
                folder={blog.folderName} 
                filename={blog.fileName} 
            />
        ))}
    </div>
}

export function generateStaticParams() {
    const blogs = getAllBlogs()
    const slugs = blogs.map((blog) => {
        return { slug: blog.folderName }
    })

    return slugs
}
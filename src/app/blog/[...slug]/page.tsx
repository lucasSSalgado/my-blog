import markdownToHtml from "@/utils/markdownToHtml";
import { getAllBlogs } from "@/utils/utils";

export function generateStaticParams() {
    const blogs = getAllBlogs()
    const slugs = blogs.map((blog) => {
        return { slug: [blog.folderName, blog.fileName] }
    })

    return slugs
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params
    const blogs = getAllBlogs()
    const folder = blogs.filter(b => b.folderName === slug[0])
    const file = folder.find(f => f.fileName === slug[1])
    const body = await markdownToHtml(file?.content || '')

    console.log(body)

    return (
        <div className="w-10/12 mx-auto mt-5">
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    );
}
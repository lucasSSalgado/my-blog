import fs from "fs";
import { join } from "path";
import { blogs, metaData } from "../../../types";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "content");

export function getAllBlogs(): blogs[] {
    let resp: blogs[] = []

    // Get the list of all directories under the content directory
    const directories = fs.readdirSync(postsDirectory);

    // get all files inside the directories
    directories.forEach((directory) => {
        const fullPath = join(postsDirectory, directory);
        const allFilesInDirectory = fs.readdirSync(fullPath)    
        
        const allBlogs = allFilesInDirectory.map(fileName => {
            const blogFullPath = join(fullPath, fileName);
            const fileContents = fs.readFileSync(blogFullPath, 'utf8');
            const fileWithoutExtensiosn = fileName.replace('.mdx', '')
            const metaData = extractMetadata(fileContents)
            
            resp = [...resp, {
                metaData: metaData,
                folderName: directory,
                fileName: fileWithoutExtensiosn,
                content: fileContents,
            }]
        });

        return allBlogs
    })

    return resp
}

export function getAllFolders(): string[] {
    return fs.readdirSync(postsDirectory)
}

function extractMetadata(markdownContent: string): metaData {
    const data = matter(markdownContent);
    return {
        title: data.data.title,
        description: data.data.description,
        date: data.data.date,
        image: data.data.image
    }
}

export function capilizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatDate(date: string) {
    const formatedDate =  new Date(date).toLocaleString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
    console.log(formatedDate);
    return formatedDate
}

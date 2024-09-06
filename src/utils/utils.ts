import fs from "fs";
import { join } from "path";
import { blogs, lastBlog, metaData, content } from '../../types';
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "content");

export function getAllBlogs(): blogs[] {
    let resp: blogs[] = []

    // Get the list of all directories under the content directory
    const directories = fs.readdirSync(postsDirectory);

    // get all files inside the directories
    directories.forEach((directory) => {
        if (directory === 'content.json') return
        const fullPath = join(postsDirectory, directory);
        const allFilesInDirectory = fs.readdirSync(fullPath)    
        
        const allBlogs = allFilesInDirectory.map(fileName => {
            const blogFullPath = join(fullPath, fileName);
            const fileContents = fs.readFileSync(blogFullPath, 'utf8');
            const fileWithoutExtensiosn = fileName.replace('.mdx', '')
            const metaData = extractMetadata(fileContents)
            const bodyWithoutMetadata = removeMetaData(fileContents)
            
            resp = [...resp, {
                metaData: metaData,
                folderName: directory,
                fileName: fileWithoutExtensiosn,
                content: bodyWithoutMetadata,
            }]
        });

        return allBlogs
    })

    return resp
}

export function getAllTopics(): content {
    const content = fs.readFileSync(join(postsDirectory, 'content.json'), 'utf8');
    const contentObj: content = JSON.parse(content)
    return contentObj
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

function removeMetaData(markdownContent: string): string {
    const data = matter(markdownContent);
    return data.content
}

export function capilizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatDate(date: string) {
    const formatedDate =  new Date(date).toLocaleString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
    return formatedDate
}

export function getLastPost(): lastBlog {
    let blogs = getAllBlogs()

    let resp: blogs = blogs[0] 
    blogs.map(b => {
        if (new Date(b.metaData.date) > new Date(resp.metaData.date)) {
            resp = b
        }
    })

    return {
        ...resp,
        blogPath: `/blog/${resp.folderName}/${resp.fileName}`,
        folderPath: `/blog/${resp.folderName}`
    }
}

export function formatTextIfBig(text: string) {
    const maxSize = 187
    if (text.length > maxSize) {
        return text.slice(0, maxSize) + '...'
    } else {
        return text
    }
}

export function removeUnderlineInTitle(text: string) {
    return text.replace(/_/g, ' ')
}

export function addInderlineInTitle(text: string) {
    return text.replace(/ /g, '_')
}
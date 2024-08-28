export interface blogs {
    metaData: metaData
    folderName: string
    fileName: string
    content: string
}

export interface metaData {
    title: string
    description: string 
    date: string
    image: string
}

export interface lastBlog extends blogs {
    blogPath: string
    folderPath: string
}

export interface content {
    topics: Topic[]
}

export interface Topic {
    folder: string
    description: string
    image: string
}
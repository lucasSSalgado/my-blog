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
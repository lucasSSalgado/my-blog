import FolderCard from "../components/FolderCard"
import { getAllFolders } from "@/utils/utils";

export default function Page() {
    const folders = getAllFolders()

    return <div className="mt-5">
        <h2 className="text-2xl">Escolha a categoria</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {
            folders.map(folder => 
                <FolderCard 
                    key={folder} 
                    title={folder} 
                    description="teste" 
                    image="https://placeimg.com/400/225/arch"
                /> 
            )
        }
        </div>
    </div>
}
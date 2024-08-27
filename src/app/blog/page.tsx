import FolderCard from "../components/FolderCard"
import { getAllTopics } from "@/utils/utils";

export default function Page() {
    const content = getAllTopics()

    return <div className="mt-5">
        <h2 className="text-2xl">Escolha a categoria</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {
            content.topics.map(t => 
                <FolderCard 
                    key={t.folder} 
                    title={t.folder} 
                    description={t.description} 
                    image={t.image}
                /> 
            )
        }
        </div>
    </div>
}
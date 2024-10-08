import FolderCard from "../components/FolderCard"
import { getAllTopics } from "@/utils/utils";

export default function Page() {
    const content = getAllTopics()

    return <div className="mt-14 md:mt-10 mb-5">
        <h2 className="text-3xl font-semibold underlined-text text-center md:text-left">Escolha a categoria:</h2>
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-10">
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
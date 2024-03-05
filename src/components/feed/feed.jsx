import { Topic } from "@/components/feed/topic"

export const Feed = ({ items }) => {
    return (
        <div className="flex flex-col gap-2 p-4">
            {items.map((item) => (
               <Topic item={item} /> 
            ))}
        </div>
    )
}
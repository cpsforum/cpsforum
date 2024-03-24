import { Topic } from "@/components/feed/topic"

export const Feed = ({ items }) => {
    return (
        <div className="flex flex-col gap-2 my-4">
            {items.map((item, i) => (
               <Topic key={i} item={item} /> 
            ))}
        </div>
    )
}
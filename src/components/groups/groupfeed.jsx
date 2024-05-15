import { Group } from "@/components/groups/group"


export const GroupFeed = ({ items }) => {
    return (
        <div className="flex flex-col gap-2 my-4">
            {items.map((item, i) => (
               <Group key={i} item={item} /> 
            ))}
        </div>
    )
}
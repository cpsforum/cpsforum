import RecentTopic from "@/components/feed/recenttopic";

export default function RecentFeed({ items }){
    return (
        <div className="flex flex-col gap-2 my-4">
            {items.map((item, i) => (
               <RecentTopic key={i} item={item} /> 
            ))}
        </div>
    )
}
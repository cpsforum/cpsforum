import RecentTopic from "@/components/feed/recenttopic";
import dayjs from "dayjs";

export default function RecentFeed({ items }){
    const recentitems = [...items].sort((a, b) => dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1);
    return (
        <div className="flex flex-col gap-2 my-4">
            {recentitems.map((item, i) => (
               <RecentTopic key={i} item={item} /> 
            ))}
        </div>
    )
}
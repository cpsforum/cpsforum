import PageTitle from "@/components/layout/pagetitle";
import { Group } from "@/components/data/groups";
import { GroupFeed } from "@/components/groups/groupfeed";

export default function GroupsPage() {
    return (
        <>
            <PageTitle title="Grupos de Estudo" />
            <GroupFeed items={Group} />
        </>
    )
}
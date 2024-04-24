'use client'

import { CircleChevronDown, CircleChevronUp } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import React from "react";

export default function Votecell({votesAmount}) {
    const [votes, setVotes] = React.useState(votesAmount)

    const updateVotes = (value) => {
        if(value=="upvote"){
            setVotes(votesAmount+1)
        }
        else if(value=="downvote"){
            setVotes(votesAmount-1)
        }
        else{
            setVotes(votesAmount)
        }
    }
    return (
        <div className="flex flex-col">
            <ToggleGroup type="single" className="flex-col" onValueChange={(value) => updateVotes(value)}>
                <ToggleGroupItem className="h-min p-0 rounded-full" value="upvote"><CircleChevronUp strokeWidth={0.8} size={35} /></ToggleGroupItem>
                {votes}
                <ToggleGroupItem className="h-min p-0 rounded-full" value="downvote"><CircleChevronDown strokeWidth={0.8} size={35} /></ToggleGroupItem>
            </ToggleGroup>
        </div>
    )
}
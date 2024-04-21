"use client"

import React from "react";
import { Topic } from "@/components/data/topic-data";
import dayjs from "dayjs";
import styled from "styled-components";
import { Separator } from "@/components/ui/separator";
import Markdown from "react-markdown";
import remarkGFM from "remark-gfm";
import { renderMathInElement } from "mathlive";
import More from "@/components/ui/more";
import { FlagIcon, PencilIcon } from "lucide-react";
import { Label } from "@/components/ui/label";

const TopicTitle = styled.h1`
    font-weight: 600;
    color: var(--foreground);
    font-size: 1.125rem;
    line-height: 1.75rem;
`;

const TopicSubtitle = styled.div`
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: flex;
`;

export default function TopicView({ params }) {
    const id = params.id;
    const slug = params.slug;
    const topic = Topic.find(topic => topic.id == id);
    React.useEffect(() => {
        renderMathInElement("mainbar");
    }
        , []);
    return (
        <div className="py-4">
            <div className="flex">
                <div>
                    <TopicTitle>
                        {topic.title}
                    </TopicTitle>
                    <TopicSubtitle>
                        <div className="me-4">
                            <span>Postado&nbsp;</span>
                            <span className="font-medium" title={topic.date}>{dayjs(topic.date).fromNow()}</span>
                        </div>
                        <div className="me-4">
                            <span>Visto&nbsp;</span>
                            <span className="font-medium">{topic.views}&nbsp;vezes</span>
                        </div>
                    </TopicSubtitle>
                </div>
                <div className="ml-auto">
                    <More>
                        <div className="flex gap-2">
                            <PencilIcon size={15} />
                            <Label>Editar</Label>
                        </div>
                        <div className="flex gap-2">
                            <FlagIcon size={15} />
                            <Label>Reportar</Label>
                        </div>
                    </More>
                </div>
            </div>
            <Separator className={"my-4"} />
            <div id="mainbar">
                <Markdown remarkPlugins={[remarkGFM]} className="prose foreground prose-sm max-w-none dark:prose-invert">
                    {topic.text}
                </Markdown>
            </div>
            <Separator className={"my-4"} />
            <div className="flex">
                <div className="text-xs text-muted-foreground ml-auto">
                    <span>Postado por&nbsp;</span>
                    <span className="font-medium">{topic.name}</span>
                </div>
            </div>
        </div>
    )
}
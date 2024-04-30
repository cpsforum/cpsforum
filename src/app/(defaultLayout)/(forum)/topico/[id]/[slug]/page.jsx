"use client"

import React from "react";
import { Topic, User } from "@/components/data/topic-data";
import dayjs from "dayjs";
import styled from "styled-components";
import { Separator } from "@/components/ui/separator";
import Markdown from "react-markdown";
import remarkGFM from "remark-gfm";
import { renderMathInElement } from "mathlive";
import mathliveStyle from "mathlive/fonts.css"
import More from "@/components/ui/more";
import { FlagIcon, PencilIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import Votecell from "@/components/general/votecell";
import Link from "next/link";
import Image from "next/image";


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

const Mainbar = styled.div`
    display: grid;
    grid-template-columns: 1fr 13fr;
`

export default function TopicView({ params }) {
    const id = params.id;
    const topic = Topic.find(topic => topic.id == id);
    const author = User.find(user => user.id == topic.userid);
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
            <Mainbar id="mainbar">
                <Votecell votesAmount={topic.votes} />
                <Markdown remarkPlugins={[remarkGFM]} className="prose foreground prose-sm max-w-none dark:prose-invert">
                    {topic.text}
                </Markdown>
            </Mainbar>
            <Separator className={"my-4"} />
            <div className="flex">
                <div className="text-xs flex flex-col text-muted-foreground ml-auto">
                    <span>Postado por&nbsp;</span>
                    <Link href={`/perfil/${author.id}/${author.slug}`} className="font-medium py-1 flex text-primary-foreground">
                        <Image src={author.pic} width={40} height={40} quality={100} alt="Foto de perfil" className="me-1 rounded" />
                        <span>{author.name}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
'use client'

import styled from "styled-components"
import { Separator } from "@/components/ui/separator"
import NewTopicButton from "@/components/general/newtopic"

const Title = styled.h1`
    font-weight: 600;
    color: var(--foreground);
    font-size: 1.125rem;
    line-height: 1.75rem;    
`

export default function PageTitle({ ntb, title, subtitle, ...props }) {
    return (
        <div className="py-4 pb-0">
            <div {...props}>
                <div>
                    <Title>
                        {title}
                    </Title>
                    {subtitle && <h2 className="text-sm text-muted-foreground">{subtitle}</h2>}
                </div>
                {ntb && <NewTopicButton />}
            </div>
            <Separator className={'mt-3'} />
        </div>
    )
}
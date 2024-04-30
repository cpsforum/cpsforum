'use client'

import styled from 'styled-components'
import { User, Topic } from "@/components/data/topic-data"
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import More from '@/components/ui/more'
import { FlagIcon, MessageCircleIcon, Share2Icon } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Feed } from '@/components/feed/feed'

const Main = styled.main`
    padding: 2rem 1rem 2rem 1rem;
`

const Grid = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    flex-direction: column;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid hsl(var(--border));
`

const Banner = styled.div`
    background-color: #fff;
    width: 100%;
    height: 7rem;
`

const ProfileName = styled.h1`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
`

const ProfileInfo = styled.div`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

const ProfilePic = styled.div`
    margin-top: -6rem;
    margin-left: 1rem;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid hsl(var(--background));
`

const ProfileMail = styled.span`
    color: hsl(var(--muted-foreground));
`

const ProfileBio = styled.p`
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-top: 0.25rem;
`

const ProfileStatsGroup = styled.div`
    display: flex;
`

const ProfileStats = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    line-height: 1rem;
    align-items: center;
`

const ProfileStatsTitle = styled.span`
    color: hsl(var(--muted-foreground));
`

const ProfileStatsCont = styled.span`
    font-weight: 500;
`

const ContentTitle = styled.h1`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
`

const Content = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`

export default function UserPage({ params }) {
    const id = params.id;
    const slug = params.slug;
    const user = User.find(user => user.id == id);
    const usertopics = Topic.filter(topic => topic.userid === user.id);
    return (
        <Main>
            <Grid>
                <Card>
                    <Banner>
                    </Banner>
                    <ProfilePic><Image src={user.pic} alt='Foto de perfil' width={500} height={500} quality={100} style={{ objectFit: "contain" }} /></ProfilePic>
                    <ProfileInfo>
                        <div className='mb-3'>
                            <ProfileName>{user.name}</ProfileName>
                            <ProfileMail>{user.email}</ProfileMail>
                            <ProfileBio>{user.description}</ProfileBio>
                        </div>
                        <ProfileStatsGroup className={"space-x-4  sm:ml-auto"}>
                            <ProfileStats>
                                <ProfileStatsTitle>TÓPICOS</ProfileStatsTitle>
                                <ProfileStatsCont>{usertopics.length}</ProfileStatsCont>
                            </ProfileStats>
                            <Separator className={"h-auto"} orientation="vertical" />
                            <ProfileStats>
                                <ProfileStatsTitle>RESPOSTAS</ProfileStatsTitle>
                                <ProfileStatsCont>0</ProfileStatsCont>
                            </ProfileStats>
                            <More>
                                <div className="flex gap-2">
                                    <MessageCircleIcon size={20} />
                                    <Label>Enviar mensagem</Label>
                                </div>
                                <div className='flex gap-2'>
                                    <Share2Icon size={15} />
                                    <Label>Compartilhar</Label>
                                </div>
                                <div className='flex gap-2'>
                                    <FlagIcon size={15} />
                                    <Label>Reportar</Label>
                                </div>
                            </More>
                        </ProfileStatsGroup>
                    </ProfileInfo>
                </Card>
                <Card>
                    <Content>
                        <ContentTitle>
                            Conteúdo
                        </ContentTitle>
                        <Feed items={usertopics} />
                    </Content>
                </Card>
            </Grid>
        </Main>
    )
}
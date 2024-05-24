'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import styled from 'styled-components'
import AccountArea from "./accountArea/accountArea"
import Image from "next/image";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from "next/link";

import { useTheme } from "next-themes"
import MobileSidebar from "@/components/layout/mobilesidebar";

export const Logo = ({...props}) => {
    const { systemTheme } = useTheme()
    const themes = {
        "dark": '/logo-white.svg',
        "light": '/logo-black.svg', 
    }
    return (
        <Link href="/">
            <Image width={125} height={125} alt="Logo" {...props} src={themes[systemTheme]} />
        </Link>
    )
}

const ShadowHeader = styled.div`
    height: 3.5rem;
    border-bottom: 1px solid hsl(var(--border) / .4);
    display: flex;
    justify-content: space-between;
    `

const LeftHeader = styled.nav`
    display: flex;
    align-items: center;
    `

const RightHeader = styled.div`
    display: flex;
    align-items: center;
    `

const LogoDiv = styled.div`
    margin-right: 1rem;
    margin-bottom: 5px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    `

const NavigationGrid = styled.ul`
    display: grid;
    gap: 0.75rem;
    padding: 1rem;
    width: 700px;
    grid-template-columns: .75fr 1fr 1fr;
    position: relative;
    `

const RowSpan3 = styled.li`
    grid-row: span 3;
    height: 100%;
    `

const NavigationImageAnchor = styled.div`
    padding: 1.5rem;
    background-image: url(/forumnavbanner.png);
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    display: flex;
    border-radius: 0.5rem;
    background-size: cover;  
    color: #fff;
    font-weight: 300;
    `

const SuperSection = styled.ul`
    flex-direction: column;
    display: flex;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: hsl(var(--muted-foreground));
`

const SuperSectionTitle = styled.li`
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    padding: 0.5rem;
    color: hsl(var(--foreground))
`

const MoreButton = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 10px;
    color: hsl(var(--muted-foreground));
`

function Header() {
    const pathname = usePathname()

    return (
        <ShadowHeader className={"px-4 lg:px-8"}>
            <LeftHeader>
                <MobileSidebar className={"lg:hidden mr-2"} />
                <LogoDiv>
                    <Logo />
                </LogoDiv>
                <NavigationMenu className={"hidden lg:flex"}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Fórum</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationGrid>
                                    <RowSpan3>
                                        <NavigationMenuLink href="/">
                                            <NavigationImageAnchor>
                                                <h3>Aprenda e ensine</h3>
                                            </NavigationImageAnchor>
                                        </NavigationMenuLink>
                                    </RowSpan3>
                                    <li>
                                        <SuperSection>
                                            <SuperSectionTitle>Matemática e Ciências da Natureza</SuperSectionTitle>
                                            <li>
                                                <NavigationMenuLink href="/matematica" className={navigationMenuTriggerStyle()}>
                                                    Matemática
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/fisica" className={navigationMenuTriggerStyle()}>
                                                    Física
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/quimica" className={navigationMenuTriggerStyle()}>
                                                    Química
                                                </NavigationMenuLink>
                                            </li>
                                        </SuperSection>
                                        <SuperSection>
                                            <SuperSectionTitle>Linguagens e Ciências Sociais</SuperSectionTitle>
                                            <li>
                                                <NavigationMenuLink href="/portugues-e-literatura" className={navigationMenuTriggerStyle()}>
                                                    Português e Literatura
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/redacao" className={navigationMenuTriggerStyle()}>
                                                    Redação
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/ingles" className={navigationMenuTriggerStyle()}>
                                                    Inglês
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/filosofia" className={navigationMenuTriggerStyle()}>
                                                    Filosofia
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/geografia" className={navigationMenuTriggerStyle()}>
                                                    Geografia
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/historia" className={navigationMenuTriggerStyle()}>
                                                    História
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/sociologia" className={navigationMenuTriggerStyle()}>
                                                    Sociologia
                                                </NavigationMenuLink>
                                            </li>
                                        </SuperSection>
                                    </li>
                                    <li>
                                        <SuperSection>
                                            <SuperSectionTitle>Etec</SuperSectionTitle>
                                            <li>
                                                <NavigationMenuLink href="desenvolvimento-de-sistem as" className={navigationMenuTriggerStyle()}>
                                                    Desenvolvimento de Sistemas
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/contabilidade" className={navigationMenuTriggerStyle()}>
                                                    Contabilidade
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/quimica-curso" className={navigationMenuTriggerStyle()}>
                                                    Química
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/administracao" className={navigationMenuTriggerStyle()}>
                                                    Administração
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/logistica" className={navigationMenuTriggerStyle()}>
                                                    Logística
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/marketing" className={navigationMenuTriggerStyle()}>
                                                    Marketing
                                                </NavigationMenuLink>
                                            </li>
                                        </SuperSection>
                                        <SuperSection>
                                            <SuperSectionTitle>Vestibulares</SuperSectionTitle>
                                            <li>
                                                <NavigationMenuLink href="/enem" className={navigationMenuTriggerStyle()}>
                                                    ENEM
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="fuvest" className={navigationMenuTriggerStyle()}>
                                                    Fuvest
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/ita-ime" className={navigationMenuTriggerStyle()}>
                                                    ITA/IME
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/fatec" className={navigationMenuTriggerStyle()}>
                                                    Fatec
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink href="/vestibulares-diversos" className={navigationMenuTriggerStyle()}>
                                                    Diversos
                                                </NavigationMenuLink>
                                            </li>
                                        </SuperSection>
                                    </li>
                                    <MoreButton>
                                        <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                                            Mais&nbsp;
                                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                                -&gt;
                                            </span>
                                        </NavigationMenuLink>
                                    </MoreButton>
                                </NavigationGrid>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/materiais" className={`${navigationMenuTriggerStyle()} ${pathname.includes('/materiais') ? 'current' : ''}`}>
                                Materiais
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </LeftHeader>
            <RightHeader>
                <AccountArea />
            </RightHeader>
        </ShadowHeader>
    )
}

export default Header
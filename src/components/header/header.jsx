'use client'

// import './header.css';
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

const Logo = () => {
    return (
        <svg height="45" viewBox="0 0 509 277" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M309.929 68V10.781h34.309v6.147h-27.38V36.26h24.809v6.147h-24.809V68zm50.124.894q-5.811 0-10.197-2.766-4.359-2.766-6.817-7.739-2.431-4.973-2.431-11.623 0-6.705 2.431-11.706 2.458-5.001 6.817-7.767 4.386-2.766 10.197-2.766t10.17 2.766q4.387 2.766 6.817 7.767 2.459 5.001 2.459 11.706 0 6.65-2.459 11.623-2.43 4.973-6.817 7.74-4.359 2.765-10.17 2.765m0-5.923q4.414 0 7.264-2.263t4.219-5.951q1.37-3.688 1.369-7.99 0-4.304-1.369-8.019-1.37-3.716-4.219-6.007t-7.264-2.29q-4.414 0-7.264 2.29-2.85 2.292-4.219 6.007-1.368 3.715-1.369 8.019 0 4.302 1.369 7.99 1.37 3.688 4.219 5.951t7.264 2.263m-3.017-43.696 6.817-12.964h7.711l-8.717 12.964zM380.123 68V25.086h6.37v6.482h.447q1.173-3.184 4.246-5.169 3.074-1.983 6.929-1.983.726 0 1.816.027 1.09.03 1.648.084v6.706q-.334-.084-1.536-.252a15 15 0 0 0-2.487-.196q-3.129 0-5.587 1.314-2.431 1.285-3.856 3.576-1.397 2.263-1.397 5.169V68zm46.876-17.546V25.086h6.594V68h-6.594v-7.264h-.447q-1.508 3.269-4.694 5.56-3.185 2.263-8.046 2.263-4.023 0-7.152-1.76-3.13-1.788-4.918-5.365-1.788-3.604-1.788-9.08V25.086h6.594v26.821q0 4.694 2.626 7.488 2.654 2.794 6.761 2.794 2.459 0 5.001-1.258 2.57-1.257 4.303-3.855 1.76-2.598 1.76-6.622M436.228 68V25.086h6.37v6.705h.559q1.34-3.436 4.33-5.336 2.99-1.928 7.181-1.928 4.247 0 7.068 1.928 2.85 1.9 4.442 5.336h.447q1.649-3.324 4.946-5.28 3.296-1.983 7.906-1.984 5.756 0 9.416 3.604 3.66 3.576 3.66 11.148V68h-6.594V39.279q0-4.75-2.598-6.79t-6.119-2.039q-4.526 0-7.012 2.738-2.487 2.71-2.487 6.873V68h-6.705V38.608q0-3.66-2.375-5.895-2.375-2.262-6.119-2.263-2.57 0-4.805 1.37-2.208 1.368-3.576 3.799-1.341 2.403-1.341 5.56V68z" fill="#3A3A56" />
            <path d="M355.972 94.662h-6.929q-.615-2.99-2.151-5.252a14.3 14.3 0 0 0-3.688-3.8 15.7 15.7 0 0 0-4.778-2.347 19 19 0 0 0-5.476-.782q-5.196 0-9.415 2.626-4.191 2.626-6.677 7.74-2.459 5.112-2.459 12.544 0 7.431 2.459 12.544 2.486 5.113 6.677 7.739 4.22 2.626 9.415 2.626 2.85 0 5.476-.782a16 16 0 0 0 4.778-2.319 14.7 14.7 0 0 0 3.688-3.827q1.536-2.291 2.151-5.253h6.929q-.783 4.386-2.85 7.851t-5.141 5.895q-3.073 2.403-6.9 3.66-3.8 1.257-8.131 1.257-7.32 0-13.019-3.576-5.7-3.576-8.968-10.17-3.27-6.593-3.269-15.645t3.269-15.646 8.968-10.17T332.95 76q4.33 0 8.131 1.257a22.2 22.2 0 0 1 6.9 3.688q3.074 2.403 5.141 5.867 2.067 3.437 2.85 7.851m18.854 40.232q-6.202 0-10.701-2.738-4.47-2.766-6.901-7.711-2.402-4.973-2.402-11.567 0-6.593 2.402-11.622 2.431-5.057 6.762-7.879 4.358-2.85 10.169-2.85 3.353 0 6.622 1.118t5.951 3.632q2.682 2.486 4.274 6.593t1.593 10.114v2.794h-33.08v-5.699h26.375q0-3.632-1.453-6.482-1.425-2.85-4.079-4.498-2.627-1.65-6.203-1.649-3.939 0-6.817 1.956a12.86 12.86 0 0 0-4.386 5.029q-1.537 3.101-1.537 6.649v3.8q0 4.861 1.677 8.242 1.704 3.352 4.721 5.113 3.017 1.732 7.013 1.732 2.598 0 4.694-.726 2.123-.755 3.66-2.235 1.536-1.509 2.374-3.744l6.37 1.788a14.1 14.1 0 0 1-3.38 5.699q-2.375 2.431-5.867 3.8-3.494 1.341-7.851 1.341m24.951-26.709V134h-6.593V91.086h6.37v6.705h.559q1.508-3.269 4.582-5.252 3.073-2.012 7.934-2.012 4.358 0 7.628 1.788 3.269 1.76 5.084 5.365 1.816 3.576 1.816 9.052V134h-6.593v-26.821q0-5.058-2.626-7.879-2.626-2.85-7.209-2.85-3.156 0-5.643 1.37-2.459 1.368-3.884 3.995t-1.425 6.37m48.651-17.099v5.588h-22.239v-5.588zm-15.757-10.281h6.593v40.902q0 2.794.81 4.191.839 1.368 2.124 1.844a8.5 8.5 0 0 0 2.766.447q1.089 0 1.788-.112l1.117-.224 1.341 5.923q-.67.252-1.872.503-1.2.28-3.045.28-2.793 0-5.476-1.202-2.654-1.2-4.414-3.66-1.732-2.458-1.732-6.202zM448.905 134V91.086h6.37v6.482h.447q1.174-3.185 4.247-5.169t6.929-1.984q.726 0 1.816.028 1.09.03 1.648.084v6.706q-.335-.084-1.536-.252a15 15 0 0 0-2.487-.195q-3.13 0-5.588 1.313a9.9 9.9 0 0 0-3.855 3.576q-1.397 2.263-1.397 5.169V134zm35.96.894q-5.812 0-10.198-2.766-4.359-2.766-6.817-7.739-2.43-4.973-2.431-11.622 0-6.706 2.431-11.707 2.458-5.001 6.817-7.767 4.387-2.766 10.198-2.766t10.169 2.766q4.387 2.766 6.817 7.767 2.46 5 2.459 11.707 0 6.649-2.459 11.622-2.43 4.973-6.817 7.739-4.358 2.766-10.169 2.766m0-5.923q4.414 0 7.264-2.263t4.219-5.951 1.369-7.99q0-4.304-1.369-8.019-1.37-3.715-4.219-6.007-2.85-2.29-7.264-2.29-4.415 0-7.264 2.29-2.85 2.292-4.219 6.007-1.37 3.716-1.369 8.019 0 4.302 1.369 7.99 1.37 3.688 4.219 5.951t7.264 2.263M309.929 200v-57.219h19.333q6.734 0 11.008 2.431 4.303 2.403 6.37 6.51t2.068 9.164-2.068 9.192q-2.039 4.134-6.314 6.593-4.274 2.431-10.952 2.431h-13.857v-6.147h13.634q4.61 0 7.403-1.592 2.794-1.593 4.052-4.303 1.284-2.738 1.285-6.174t-1.285-6.147q-1.258-2.71-4.079-4.247-2.823-1.564-7.488-1.564h-12.181V200zm52.234 1.006q-4.08 0-7.404-1.537-3.325-1.564-5.281-4.498-1.955-2.961-1.955-7.152 0-3.689 1.453-5.979a10.25 10.25 0 0 1 3.883-3.632q2.43-1.314 5.364-1.956a65 65 0 0 1 5.951-1.062q3.912-.502 6.342-.754 2.459-.28 3.576-.922 1.146-.642 1.146-2.235v-.224q0-4.134-2.263-6.426-2.235-2.29-6.789-2.29-4.722 0-7.404 2.067t-3.772 4.414l-6.258-2.235q1.677-3.911 4.47-6.09 2.821-2.208 6.147-3.074 3.353-.894 6.593-.894 2.068 0 4.75.503 2.71.475 5.224 1.984 2.543 1.509 4.219 4.554t1.677 8.158V200h-6.594v-5.811h-.335q-.67 1.397-2.235 2.989-1.565 1.593-4.163 2.71-2.599 1.118-6.342 1.118m1.005-5.923q3.912 0 6.594-1.537 2.71-1.536 4.079-3.967 1.397-2.431 1.397-5.113v-6.035q-.419.504-1.844.922-1.397.392-3.241.699-1.816.28-3.548.503-1.704.195-2.766.335a25 25 0 0 0-4.806 1.089q-2.206.727-3.576 2.208-1.341 1.452-1.341 3.967 0 3.436 2.543 5.197 2.57 1.732 6.509 1.732m48.302-12.629v-25.368h6.593V200h-6.593v-7.264h-.447q-1.51 3.268-4.694 5.56-3.185 2.263-8.046 2.263-4.024 0-7.153-1.76-3.129-1.788-4.917-5.365-1.788-3.603-1.788-9.08v-27.268h6.594v26.821q0 4.693 2.626 7.488 2.654 2.793 6.761 2.794 2.459 0 5.001-1.258 2.57-1.257 4.303-3.855 1.76-2.598 1.76-6.622m15.822-39.673V200h-6.593v-57.219zm15.264 58.225q-4.079 0-7.404-1.537-3.324-1.564-5.28-4.498-1.956-2.961-1.956-7.152 0-3.689 1.453-5.979a10.25 10.25 0 0 1 3.884-3.632q2.43-1.314 5.364-1.956a65 65 0 0 1 5.951-1.062 271 271 0 0 1 6.342-.754q2.459-.28 3.576-.922 1.146-.642 1.146-2.235v-.224q0-4.134-2.264-6.426-2.235-2.29-6.789-2.29-4.72 0-7.403 2.067t-3.772 4.414l-6.258-2.235q1.676-3.911 4.47-6.09 2.822-2.208 6.146-3.074 3.353-.894 6.594-.894 2.067 0 4.749.503 2.71.475 5.225 1.984 2.542 1.509 4.219 4.554 1.676 3.045 1.676 8.158V200h-6.593v-5.811h-.336q-.67 1.397-2.235 2.989-1.565 1.593-4.163 2.71-2.598 1.118-6.342 1.118m1.006-5.923q3.911 0 6.594-1.537 2.71-1.536 4.079-3.967 1.397-2.431 1.397-5.113v-6.035q-.42.504-1.844.922-1.398.392-3.241.699-1.817.28-3.549.503-1.704.195-2.765.335a25 25 0 0 0-4.806 1.089q-2.207.727-3.576 2.208-1.341 1.452-1.341 3.967 0 3.436 2.542 5.197 2.571 1.732 6.51 1.732M341.22 223.086q-.503-4.246-4.079-6.594-3.576-2.346-8.773-2.346-3.8 0-6.649 1.229-2.822 1.228-4.414 3.381-1.565 2.15-1.565 4.889 0 2.29 1.09 3.939a9.7 9.7 0 0 0 2.849 2.71 20.4 20.4 0 0 0 3.632 1.76q1.9.671 3.493 1.09l5.811 1.565q2.235.587 4.973 1.62a23 23 0 0 1 5.281 2.822q2.543 1.76 4.19 4.526 1.649 2.766 1.649 6.789 0 4.638-2.431 8.382-2.403 3.743-7.04 5.951-4.61 2.207-11.204 2.207-6.147 0-10.645-1.984-4.47-1.983-7.04-5.532-2.542-3.548-2.878-8.242h7.153q.279 3.241 2.179 5.365 1.927 2.095 4.861 3.129 2.962 1.005 6.37 1.006 3.967 0 7.125-1.286 3.156-1.313 5.001-3.632 1.844-2.347 1.844-5.476 0-2.85-1.593-4.638t-4.191-2.905a44 44 0 0 0-5.615-1.956l-7.041-2.011q-6.705-1.928-10.617-5.504-3.91-3.577-3.911-9.36 0-4.805 2.598-8.382 2.626-3.603 7.041-5.587 4.442-2.012 9.918-2.012 5.532 0 9.834 1.984 4.303 1.956 6.817 5.364 2.542 3.408 2.683 7.739zm25.979 43.808q-5.812 0-10.198-2.766-4.359-2.766-6.817-7.739-2.431-4.973-2.431-11.622 0-6.706 2.431-11.707 2.458-5.001 6.817-7.767 4.386-2.766 10.198-2.766 5.811 0 10.169 2.766 4.387 2.766 6.817 7.767 2.459 5 2.459 11.707 0 6.649-2.459 11.622-2.43 4.973-6.817 7.739-4.358 2.766-10.169 2.766m0-5.923q4.413 0 7.264-2.263t4.218-5.951q1.37-3.688 1.369-7.99 0-4.304-1.369-8.019t-4.218-6.007q-2.85-2.29-7.264-2.291-4.415 0-7.265 2.291t-4.218 6.007q-1.37 3.715-1.369 8.019 0 4.302 1.369 7.99t4.218 5.951q2.85 2.263 7.265 2.263m47.114-12.517v-25.368h6.593V266h-6.593v-7.264h-.447q-1.51 3.268-4.694 5.56-3.186 2.262-8.047 2.263-4.023 0-7.152-1.76-3.129-1.788-4.917-5.365-1.788-3.603-1.788-9.08v-27.268h6.593v26.821q0 4.693 2.627 7.488 2.654 2.793 6.761 2.794 2.459 0 5.001-1.258 2.57-1.257 4.302-3.855 1.761-2.598 1.761-6.622M422.312 266v-5.029l24.363-31.291v-.447h-23.58v-6.147h32.073v5.253l-23.692 31.067v.447h24.475V266zm46.982 1.006q-4.08 0-7.404-1.537-3.325-1.564-5.281-4.498-1.955-2.961-1.955-7.152 0-3.689 1.452-5.979a10.26 10.26 0 0 1 3.884-3.632q2.43-1.314 5.364-1.956a65 65 0 0 1 5.951-1.062q3.912-.502 6.342-.754 2.459-.28 3.576-.922 1.146-.642 1.146-2.235v-.224q0-4.134-2.263-6.426-2.235-2.29-6.789-2.29-4.722 0-7.404 2.067t-3.772 4.414l-6.258-2.235q1.677-3.911 4.47-6.09 2.822-2.208 6.147-3.074 3.353-.894 6.593-.894 2.068 0 4.75.503 2.71.475 5.224 1.984 2.543 1.509 4.219 4.554t1.677 8.158V266h-6.594v-5.811h-.335q-.67 1.397-2.235 2.989-1.565 1.593-4.163 2.71-2.599 1.118-6.342 1.118m1.005-5.923q3.912 0 6.594-1.537 2.71-1.536 4.079-3.967 1.397-2.431 1.397-5.113v-6.035q-.419.504-1.844.922-1.397.392-3.241.699-1.816.28-3.548.503-1.704.195-2.766.335a25 25 0 0 0-4.806 1.089q-2.207.727-3.576 2.208-1.341 1.452-1.341 3.967 0 3.436 2.543 5.197 2.57 1.731 6.509 1.732" fill="#0094FF" />
            <rect x="4.95" y="138.5" width="188.869" height="188.869" rx="24.359" transform="rotate(-45 4.95 138.5)" stroke="#0094FF" strokeWidth="7" />
            <rect x="44.066" y="44.066" width="188.869" height="188.869" rx="24.359" stroke="#0094FF" strokeWidth="7" />
            <rect x="17.462" y="82.059" width="188.869" height="188.869" rx="24.359" transform="rotate(-20 17.462 82.06)" stroke="#3A3A56" strokeWidth="7" />
            <rect x="17.462" y="194.941" width="188.869" height="188.869" rx="24.359" transform="rotate(-70 17.462 194.941)" stroke="#3A3A56" strokeWidth="7" />
        </svg>
    )
}

const ShadowHeader = styled.div`
    height: 3.5rem;
    padding: 0 2rem 0 2rem;
    border-bottom: 1px solid hsl(var(--border) / .4);
    display: flex;
    justify-content: space-between;
    `

const LeftHeader = styled.div`
    display: flex;
    align-items: center;
    `

const RightHeader = styled.div`
    display: flex;
    align-items: center;
    `

const LogoDiv = styled.div`
    margin-right: 1rem;
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
    background-image: url("forumnavbanner.png");
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
    return (
        <ShadowHeader>
            <LeftHeader>
                <LogoDiv>
                    <Logo />
                </LogoDiv>
                <nav>
                    <NavigationMenu>
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
                                <NavigationMenuLink href="materiais" className={navigationMenuTriggerStyle()}>
                                    Materiais
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>
            </LeftHeader>
            <RightHeader>
                <AccountArea />
            </RightHeader>
        </ShadowHeader>
    )
}

export default Header
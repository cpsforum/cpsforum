import './globals.css'
import MyMsalProvider from '@/service/msal/MyMsalProvider'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Header from "../components/header/header";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata = {
  title: 'MSAL with Next.Js 14',
  description: 'Created by Mazen Alsenih (https://mazensenih.com | mazen.el.senih@gmail)',
}

export default function RootLayout({children}) {

  return (
    <MyMsalProvider>
      <html lang="en">
        <body className={GeistSans.className}>
          <StyledComponentsRegistry>
            <header>
              <Header />
            </header>
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </MyMsalProvider>
  )
}

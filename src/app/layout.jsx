import './globals.css'
import MyMsalProvider from '@/service/msal/MyMsalProvider'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Header from "../components/header/header";
import StyledComponentsRegistry from "@/lib/registry";
import MainLayout from '@/components/layout/mainlayout';

export const metadata = {
  title: 'Fórum',
  description: 'Fórum',
}

export default function RootLayout({ children }) {
  return (
    <MyMsalProvider>
      <html lang="pt-br">
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

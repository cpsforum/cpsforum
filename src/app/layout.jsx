import './globals.css'
import MyMsalProvider from '@/service/msal/MyMsalProvider'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Header from "../components/header/header";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "@/components/theme-provider/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: 'Fórum',
  description: 'Fórum',
}

export default function RootLayout({ children }) {
  return (
    <MyMsalProvider>
      <html lang="pt-br" suppressHydrationWarning>
        <body className={`${GeistSans.className} ${GeistMono.variable}`}>
          <StyledComponentsRegistry>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <header>
                <Header />
              </header>
              {children}
              <Toaster />
            </ThemeProvider>
          </StyledComponentsRegistry>
        </body>
      </html>
    </MyMsalProvider>
  )
}

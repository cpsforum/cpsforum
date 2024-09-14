import './globals.css'
import MyMsalProvider from '@/service/msal/MyMsalProvider'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "@/components/theme-provider/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import NextTopLoader from 'nextjs-toploader';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <MyMsalProvider>
      <html lang="pt-br" suppressHydrationWarning>
        <body className={`${GeistSans.className} ${GeistMono.variable}`}>
          <NextTopLoader color='hsl(var(--primary))' shadow={false} showSpinner={false} />
          <StyledComponentsRegistry>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </StyledComponentsRegistry>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </MyMsalProvider>
  )
}

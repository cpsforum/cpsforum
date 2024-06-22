import './globals.css'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "@/components/theme-provider/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import NextTopLoader from 'nextjs-toploader';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="pt-br" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon-black.svg" />
        </head>
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
    </SessionProvider>
  )
}

import '../globals.css'
import { ThemeProvider } from "@/components/theme-provider/theme-provider"

export const metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
}

export default function SignInLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

import '../globals.css'

export const metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function SignInLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  )
}

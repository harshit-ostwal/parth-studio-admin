import './globals.css'
import NextTopLoader from 'nextjs-toploader'
import Display from './Display'
import { NextAuthProvider } from './Provider'

export const metadata = {
  title: 'Parth Studio - Admin',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color={"red"}
          zIndex={1600}
          speed={1000}
          height={4}
          crawlSpeed={1000}
          crawl={true}
          easing="ease"
          showSpinner={false}
          initialPosition={0.1} />
        <NextAuthProvider>
          <Display children={children} />
        </NextAuthProvider>
      </body>
    </html>
  )
}

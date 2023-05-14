import './globals.css'
import { Poppins } from 'next/font/google'
import Providers from './providers'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata = {
  title: 'Quran App',
  description: 'Quran app by Rizqi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} theme-light bg-primary`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

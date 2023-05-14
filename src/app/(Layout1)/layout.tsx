import '@/app/globals.css'
import { Poppins } from 'next/font/google'
import Providers from '@/app/providers'
import Sidebar from '@/components/Sidebar'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700']})

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
      <body className={`${poppins.className} bg-primary`}>
        <Sidebar />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

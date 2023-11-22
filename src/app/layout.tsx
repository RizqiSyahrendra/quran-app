import './globals.css'
import localFont from 'next/font/local'
import Providers from './providers'

const indoPak = localFont({
  src: './assets/fonts/indopak-nastaleeq.woff2',
  display: 'swap',
  variable: '--font-indopak',
});

const lpmq = localFont({
  src: './assets/fonts/lpmq.ttf',
  display: 'swap',
  variable: '--font-lpmq',
});


export const metadata = {
  title: 'Qur\'an App',
  description: 'Qur\'an app by Rizqi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${indoPak.variable} ${lpmq.variable} theme-dark bg-primary`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

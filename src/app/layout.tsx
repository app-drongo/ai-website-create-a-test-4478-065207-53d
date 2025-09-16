import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Acme Tech',
  description: 'Elevate your business with our cutting-edge software solutions.',
  keywords: ['saas', 'software', 'technology', 'productivity', 'collaboration'],
  openGraph: {
    title: 'Acme Tech',
    description: 'Elevate your business with our cutting-edge software solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  )
}
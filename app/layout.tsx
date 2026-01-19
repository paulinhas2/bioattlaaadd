import React from "react"
import type { Metadata, Viewport } from 'next'
import { Oswald, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const oswald = Oswald({ subsets: ["latin"], variable: '--font-heading' });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: 'KCP MODS | Mods e patchs para console',
  description: 'Os melhores mods e patchs para console. Compre agora e transforme sua experiência de jogo!',
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${oswald.variable} ${roboto.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

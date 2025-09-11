import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import '../globals.css'
import { Providers } from '@/components/providers';
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(nextAuthOptions);
    
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Providers session={session}>
          {children}
        </Providers>
      </body>
    </html>
  )
}

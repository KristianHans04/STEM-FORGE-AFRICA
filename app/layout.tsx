import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/app/components/ThemeProvider'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'STEM FORGE AFRICA LTD - Empowering Innovation Through STEM',
    template: '%s | STEM FORGE AFRICA LTD'
  },
  description: 'STEM FORGE AFRICA LTD is the parent organization of FIRST Global Team Kenya, dedicated to advancing STEM education and innovation across Africa.',
  keywords: ['STEM', 'Education', 'Africa', 'Innovation', 'FIRST Global', 'Team Kenya', 'Robotics', 'Technology'],
  authors: [{ name: 'STEM FORGE AFRICA LTD' }],
  creator: 'STEM FORGE AFRICA LTD',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stemforgeafrica.org',
    siteName: 'STEM FORGE AFRICA LTD',
    title: 'STEM FORGE AFRICA LTD - Empowering Innovation Through STEM',
    description: 'Parent organization of FIRST Global Team Kenya, advancing STEM education across Africa.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'STEM FORGE AFRICA LTD',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STEM FORGE AFRICA LTD',
    description: 'Empowering Innovation Through STEM Education',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://stemforgeafrica.org'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-grow overflow-x-hidden w-full">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

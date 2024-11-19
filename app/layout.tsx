import './globals.css'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import { ThemeProviders } from './theme-providers'
import { Space_Grotesk } from 'next/font/google'
import siteMeta from '@/data/siteMeta'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang={siteMeta.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          {/* <Analytics
            analyticsConfig={siteMetadata.analytics as AnalyticsConfig}
          /> */}
          <SectionContainer>
            {/* <SearchProvider searchConfig={siteMetadata.search as SearchConfig}> */}
            <Header />
            <main className="mb-auto">{children}</main>
            {/* </SearchProvider> */}
            <Footer />
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}

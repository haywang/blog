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
  const basePath = process.env.BASE_PATH || ''
  return (
    <html
      lang={siteMeta.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${basePath}/static/favicons/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/static/favicons/favicon-16x16.png`}
      />
      <link
        rel="manifest"
        href={`${basePath}/static/favicons/site.webmanifest`}
      />
      <meta
        name="theme-color"
        media="(prefers-color-schme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
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

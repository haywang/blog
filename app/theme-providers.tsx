import { ThemeProvider } from 'next-themes'
import siteMeta from '@/data/siteMeta'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMeta.theme} enableSystem>
      {children}
    </ThemeProvider>
  )
}

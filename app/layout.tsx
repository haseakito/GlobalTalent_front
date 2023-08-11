import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
        <body className={inter.className}>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                <Header />
                <main className='h-full'>{children}</main>
                <Footer />
            </ThemeProvider>
        </body>
    </html>
  )
}

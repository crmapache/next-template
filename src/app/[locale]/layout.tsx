import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import { Inter } from 'next/font/google'

import { locales } from '@/i18n'
import { Provider } from '@/provider'
import { StyledComponentsRegistry } from '@/registry'
import { Theme } from '@radix-ui/themes'

import '@radix-ui/themes/styles.css'
import '@styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Theme>
            <StyledComponentsRegistry>
              <NextIntlClientProvider messages={messages}>
                <Provider>{children}</Provider>
              </NextIntlClientProvider>
            </StyledComponentsRegistry>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

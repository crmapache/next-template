import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import { Inter } from 'next/font/google'

import { locales } from '@/i18n'
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
    <html lang={locale}>
      <body className={inter.className}>
        <Theme>
          <StyledComponentsRegistry>
            <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
          </StyledComponentsRegistry>
        </Theme>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

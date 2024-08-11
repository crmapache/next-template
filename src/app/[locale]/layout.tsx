import { getMessages, unstable_setRequestLocale } from 'next-intl/server'

import { LayoutProps } from '@types'
import { locales } from '@/i18n'
import { Provider } from '@/provider'

import '@radix-ui/themes/styles.css'
import '@styles/globals.css'

export default async function Layout({ children, params: { locale } }: LayoutProps) {
  unstable_setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Provider messages={messages} locale={locale}>
          {children}
        </Provider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

'use client'

import { useLocale } from 'next-intl'

import { locales } from '@/i18n'
import { Link, usePathname } from '@/navigation'
import { Button } from '@radix-ui/themes'

import { Root } from './LocaleSwitcher.elements'

export const LocaleSwitcher = () => {
  const currentLocale = useLocale()
  const pathname = usePathname()

  return (
    <Root>
      {locales.map((locale) => (
        <Button key={locale} variant={locale === currentLocale ? 'solid' : 'outline'} asChild>
          <Link href={pathname} locale={locale}>
            {locale.toUpperCase()}
          </Link>
        </Button>
      ))}
    </Root>
  )
}

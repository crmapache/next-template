'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'

import { locales } from '@/i18n'
import { Button } from '@radix-ui/themes'

import { LocaleSwitcherContainer } from './LocaleSwitcher.elements'

export const LocaleSwitcher = () => {
  const currentLocale = useLocale()

  return (
    <LocaleSwitcherContainer>
      {locales.map((locale) => (
        <Button key={locale} variant={locale === currentLocale ? 'solid' : 'outline'} asChild>
          <Link href={`/${locale}`}>{locale.toUpperCase()}</Link>
        </Button>
      ))}
    </LocaleSwitcherContainer>
  )
}

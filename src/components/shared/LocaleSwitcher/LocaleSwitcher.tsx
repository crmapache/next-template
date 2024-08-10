'use client'

import { useLocale } from 'next-intl'

import { locales } from '@/i18n'
import { Link } from '@/navigation'
import { Button } from '@radix-ui/themes'

import { Container } from './LocaleSwitcher.elements'

export const LocaleSwitcher = () => {
  const currentLocale = useLocale()

  return (
    <Container test={1}>
      {locales.map((locale) => (
        <Button key={locale} variant={locale === currentLocale ? 'solid' : 'outline'} asChild>
          <Link href="/" locale={locale}>
            {locale.toUpperCase()}
          </Link>
        </Button>
      ))}
    </Container>
  )
}

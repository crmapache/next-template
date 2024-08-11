'use client'

import { useLocale, useTranslations } from 'next-intl'

import { Link, usePathname } from '@/navigation'
import { Button } from '@radix-ui/themes'

import { Root } from './AppNavigation.elements'
import { AppNavigationProps } from './AppNavigation.types'

export const AppNavigation = ({}: AppNavigationProps) => {
  const t = useTranslations('Navigation')

  const currentLocale = useLocale()
  const pathname = usePathname()

  return (
    <Root>
      <Button variant={pathname === '/' ? 'solid' : 'outline'} asChild>
        <Link href="/" locale={currentLocale}>
          {t('home')}
        </Link>
      </Button>

      <Button variant={pathname === '/about-us' ? 'solid' : 'outline'} asChild>
        <Link href="/about-us" locale={currentLocale}>
          {t('aboutUs')}
        </Link>
      </Button>

      <Button variant={pathname === '/contacts' ? 'solid' : 'outline'} asChild>
        <Link href="/contacts" locale={currentLocale}>
          {t('contacts')}
        </Link>
      </Button>
    </Root>
  )
}

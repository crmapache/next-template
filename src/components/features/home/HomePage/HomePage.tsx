'use client'

import { useTranslations } from 'next-intl'

import { ThemeSwitcher, LocaleSwitcher } from '@shared'
import { Heading } from '@radix-ui/themes'

import { Root } from './HomePage.elements'

export const HomePage = () => {
  const t = useTranslations('Home')

  return (
    <Root>
      <Heading as="h1" size="8">
        {t('pageName')}
      </Heading>
      <Heading as="h2" size="6">
        {t('title')}
      </Heading>
      <LocaleSwitcher />
      <ThemeSwitcher />
    </Root>
  )
}

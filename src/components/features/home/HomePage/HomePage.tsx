'use client'

import { useTranslations } from 'next-intl'

import { Heading } from '@radix-ui/themes'
import { LocaleSwitcher } from '@/components/shared/LocaleSwitcher'

import { Container } from './HomePage.elements'

export const HomePage = () => {
  const t = useTranslations('Home')

  return (
    <Container>
      <Heading as="h1" size="8">
        {t('page-name')}
      </Heading>
      <Heading as="h2" size="6">
        {t('title')}
      </Heading>
      <LocaleSwitcher />
    </Container>
  )
}

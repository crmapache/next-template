'use client'

import { useTranslations } from 'next-intl'

import { Heading } from '@radix-ui/themes'

import { Root } from './AboutUsPage.elements'

export const AboutUsPage = () => {
  const t = useTranslations('AboutUs')

  return (
    <Root>
      <Heading as="h1" size="8">
        {t('pageName')}
      </Heading>
      <Heading as="h2" size="6">
        {t('title')}
      </Heading>
    </Root>
  )
}

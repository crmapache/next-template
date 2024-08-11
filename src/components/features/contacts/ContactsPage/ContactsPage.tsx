'use client'

import { useTranslations } from 'next-intl'

import { Heading } from '@radix-ui/themes'

import { Root } from './ContactsPage.elements'

export const ContactsPage = () => {
  const t = useTranslations('Contacts')

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

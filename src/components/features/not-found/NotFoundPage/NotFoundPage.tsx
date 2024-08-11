'use client'

import { useTranslations } from 'next-intl'

import { Link } from '@/navigation'
import { Button, Heading } from '@radix-ui/themes'

import { Root } from './NotFoundPage.elements'

export const NotFoundPage = () => {
  const t = useTranslations('NotFound')

  return (
    <Root>
      <Heading as="h1" size="8">
        {t('pageName')}
      </Heading>

      <Button variant="solid" asChild>
        <Link href="/">{t('goHome')}</Link>
      </Button>
    </Root>
  )
}

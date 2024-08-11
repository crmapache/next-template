import { ReactNode } from 'react'
import { AbstractIntlMessages } from 'use-intl'

export type LayoutProps = {
  children: ReactNode
  params: { locale: string }
}

export type ProviderProps = {
  children: ReactNode
  messages?: AbstractIntlMessages
  locale?: string
}

export type GenerateMetadataProps = {
  params: {
    locale: string
  }
}

'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'

import { Theme } from '@radix-ui/themes'

import { StyledComponentsRegistry } from './registry'
import { ProviderProps } from './types'

export const Provider = ({ children, messages, locale }: ProviderProps) => {
  const queryClient = new QueryClient()

  return (
    <ThemeProvider attribute="class">
      <Theme>
        <StyledComponentsRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </Theme>
    </ThemeProvider>
  )
}

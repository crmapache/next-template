'use client'

import { AppNavigation } from '@features'
import { ThemeSwitcher, LocaleSwitcher } from '@shared'

import { Root } from './CommonLayout.elements'
import { CommonLayoutProps } from './CommonLayout.types'

export const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <Root>
      <AppNavigation />
      {children}
      <LocaleSwitcher />
      <ThemeSwitcher />
    </Root>
  )
}

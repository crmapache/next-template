import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Flex, Select } from '@radix-ui/themes'

import { SelectTrigger, ThemeSwitcherContainer } from './ThemeSwitcher.elements'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeSwitcherContainer>
      <Flex gap="3" align="center">
        <Select.Root value={theme} onValueChange={(v) => setTheme(v)}>
          <SelectTrigger />
          <Select.Content>
            <Select.Item value="system">System</Select.Item>
            <Select.Item value="dark">Dark</Select.Item>
            <Select.Item value="light">Light</Select.Item>
          </Select.Content>
        </Select.Root>
      </Flex>
    </ThemeSwitcherContainer>
  )
}

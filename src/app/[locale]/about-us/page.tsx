import { getTranslations } from 'next-intl/server'

import { AboutUsPage } from '@features'
import { GenerateMetadataProps } from '@types'

export async function generateMetadata({ params: { locale } }: GenerateMetadataProps) {
  const t = await getTranslations({ locale, namespace: 'AboutUs' })

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  }
}

export default function Page() {
  return <AboutUsPage />
}

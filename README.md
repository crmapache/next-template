This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install deps and run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Folders Structure
Components folder structure  
``scr/components/core``: Basic components that can be reused throughout the project.  
``scr/components/features``: Each folder here should be named after the feature or page and start with a lowercase letter. The components will be located inside.  
``scr/components/shared``: Independent components that can be reused in a project.  

Each component should have the following structure:  
``**/ComponentName/index.ts``  Export point from folder.  
``**/ComponentName/ComponentName.tsx``  Main component file.  
``**/ComponentName/ComponentName.elements.tsx``  Elements of styled components. The root element must always be named ``Root``.  
``**/ComponentName/ComponentName.types.tsx``  Types for the component. Must contain at least ``export type ComponentNameProps = {}``.  
``**/ComponentName/ComponentName.constants.tsx``  Constants.  
``**/ComponentName/ComponentName.helpers.tsx``  Helper functions that can be moved out of the main component file.  

## Localization
This project uses [`next-intl`](https://next-intl-docs.vercel.app/) to ensure the correct translation of texts and other meanings into the user's language.

All new translations of texts must be placed in ``messages/[locale].json``  

To insert a translation into a page, use:
```tsx
// src/components/**/Component.tsx
export const Component = () => {
  const t = useTranslations('Namespace')

  return <div>{t('key')}</div>
}
```

To insert a translation into a page metadata, use:
```tsx
// src/app/[locale]/**/page.tsx
export async function generateMetadata({ params: { locale } }: GenerateMetadataProps) {
  const t = await getTranslations({ locale, namespace: 'Home' })

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  }
}
```

To navigation, use variables from ``src/navigation.ts``

## Components generator
To save time, use the ``npm run g`` command to create new components.  
The new component will be automatically added to the export file of the folder in which you want to create it.

## Styling
This project uses [`styled-components`](https://styled-components.com/docs/basics#installation) for styling.   

All new styled components must be created in ``**/ComponentName/ComponentName.elements.tsx``  
Component root element always must be named ``Root``  

Try to avoid use prefix in styled components naming:  
``✅ export const Header = styled.div``  
``❌ export const ComponentNameHeader = styled.div``

``scr/styles``: global and additional css/scss files

This project also uses [`@radix-ui/themes`](https://www.radix-ui.com/themes/docs/overview/getting-started), so it is necessary to use as many possibilities as possible from there, such as:
- colors
- typography
- spacing
- breakpoints
- radius
- shadows
- cursors
- layout components
- UI components

## API calls
This project uses [`@tanstack/react-query`](https://tanstack.com/query/v3) for api calls.  
Examples can be found in ``scr/api``. All other API calls should be placed there as well.

## Dark mode
This project uses [`next-themes`](https://github.com/pacocoursey/next-themes) to handle dark mode.  

You can find all the documentation at the link above, and also modify the ``src/components/shared/ThemeSwitcher`` to switch the theme if necessary.
import '../styles/globals.css'

import Head from 'next/head'
import { EB_Garamond } from 'next/font/google'
import { Metadata } from 'next'

const ebGaramond = EB_Garamond({
  subsets: ['latin', 'latin-ext'],
  variable: '--primary-font'
})

export const metadata: Metadata = {
  title: 'Hikurangi'
}

export default function RootLayout ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
      </Head>
      <html lang='en'>
        <body className={ebGaramond.variable}>{children}</body>
      </html>
    </>
  )
}

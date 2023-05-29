import Head from 'next/head'
import '../styles/globals.css'

import { EB_Garamond } from 'next/font/google'

const ebGaramond = EB_Garamond({ subsets: ['latin', 'latin-ext'] })

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
        {/* <link
          href='https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,500,500i,600,600i,700,700i,800,800i&display=swap'
          rel='stylesheet'
        ></link> */}
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
        <body className={ebGaramond.className}>{children}</body>
      </html>
    </>
  )
}

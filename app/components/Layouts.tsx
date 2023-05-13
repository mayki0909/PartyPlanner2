import Head from 'next/head'
import { ReactNode } from 'react'
import { Metadata } from '../interfaces'
// import { Navbar } from './Navbar/Navbar'
// import { Footer } from './Footer/Footer'

interface LayoutProps {
  metadata: Metadata,
  children: ReactNode,
}

export const Layout = ({metadata, children}: LayoutProps) => {

  return (
    <>
      <Head>
        <meta httpEquiv='content-type' content='text/html; charset=UTF-8'/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        
        <link rel='icon' href='/favicons/favicon-16x16.png' type='image/png'/>
        <link rel='apple-touch-icon' sizes='16x16' href='/favicons/favicon-16x16.png'/>
        <link rel='apple-touch-icon' sizes='32x32' href='/favicons/favicon-32x32.png'/>
        <link rel='apple-touch-icon' sizes='96x96' href='/favicons/favicon-96x96.png'/>
        <link rel='apple-touch-icon' sizes='192x192' href='/favicons/favicon-192x192.png'/>

        {/* <!-- Primary Meta Tags --> */}
        <title>{metadata.title}</title>
        <meta name='title' content={metadata.title} />
        <meta name='description' content={metadata.description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={metadata.url} />
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:image' content={`${metadata.url}${metadata.image}`} />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={metadata.url} />
        <meta property='twitter:title' content={metadata.title} />
        <meta property='twitter:description' content={metadata.description} />
        <meta property='twitter:image' content={`${metadata.url}${metadata.image}`} />
      </Head>
      <main>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </main>
    </>
  )
}
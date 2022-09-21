import * as React from 'react'
import Head from 'next/head'

const Layout = ({
  children,
  title = 'This is the default title',
}) => (
  <div className='w-full'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
)

export default Layout

import React, { Fragment } from 'react';
import Head from 'next/head'
import { apiEndpoint } from 'prismic-configuration';
import "../stylesheets/main.scss"

import Header from './Header'
import Footer from './Footer'

export default ({ children, altLangs, currentLang, isMyMainLanguage, menu }) => (
  <Fragment>
    <Head>
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,900,400italic,700italic" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/css/flag-icon.min.css" rel="stylesheet" />
      <link rel="icon" href="/static/favicon.png" type="image/png" />
      <title>Multi-language site</title>
      <script dangerouslySetInnerHTML={{
        __html: `
        window.prismic = { endpoint: "${apiEndpoint}" }
      `}} />
      <script src="//static.cdn.prismic.io/prismic.min.js?new=true" />
    </Head>
    <Header 
      altLangs={altLangs}
      currentLang={currentLang}
      isMyMainLanguage={isMyMainLanguage}
      menu={menu}
    />
    <main>{children}</main>
    <Footer />
  </Fragment>
)
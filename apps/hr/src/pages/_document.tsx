import createEmotionServer from '@emotion/server/create-instance';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

import i18nextConfig from '../../next-i18next.config';
import {createEmotionCache} from '../helpers/createEmotionCache';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const {extractCriticalToChunks} = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) =>
          function EnhanceApp(props: any) {
            return <App emotionCache={cache} {...props} />;
          },
      });

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map(style => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        dangerouslySetInnerHTML={{__html: style.css}}
      />
    ));

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
    };
  }

  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale}>
        <Head>
          <meta name="theme-color" content="#007FFF" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

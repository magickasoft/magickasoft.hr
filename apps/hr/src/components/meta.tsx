import Head from 'next/head';
import {useTranslation} from 'next-i18next';
import React from 'react';

export const Meta = () => {
  const {t} = useTranslation('common');
  return (
    <Head>
      <meta property="article:published_time" content={new Date().toISOString()} />
      <meta property="article:modified_time" content={new Date().toISOString()} />
      <title>{t('HomePage.SEO.title')}</title>
      <meta name="description" content={t('HomePage.SEO.description')} />
      <meta name="keywords" content={t('HomePage.SEO.keywords')} />
      <meta property="og:title" content={t('HomePage.SEO.og.title')} />
      <meta property="og:description" content={t('HomePage.SEO.og.description')} />
      <meta property="og:type" content={t('HomePage.SEO.og.type')} />
      <meta property="og:locale" content={t('HomePage.SEO.og.locale')} />
      <meta property="og:url" content={t('HomePage.SEO.og.url')} />
      <meta property="og:site_name" content={t('HomePage.SEO.og.site_name')} />
      <meta property="og:image" key="og:image" content={t('HomePage.SEO.og.image')} />
      <meta property="twitter:image" key="twitter:image" content={t('HomePage.SEO.twitter.image')} />
      <meta property="twitter:title" content={t('HomePage.SEO.twitter.title')} />
      <meta property="twitter:description" content={t('HomePage.SEO.twitter.description')} />
      <meta name="twitter:card" content={t('HomePage.SEO.twitter.card')} />
      <meta property="twitter:url" content={t('HomePage.SEO.twitter.url')} />
    </Head>
  );
};

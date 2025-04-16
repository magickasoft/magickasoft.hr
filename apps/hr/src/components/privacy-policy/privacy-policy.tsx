import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {buildDocument} from './buildDocument';
import {docs} from './locales';
import {Container, H1} from './privacy-policy.sc';

/**
 * Render the Privacy Policy page with the specified content and structure.
 *
 * @param {any} props - the properties for rendering the page
 * @return {JSX.Element} the rendered Privacy Policy page
 */
export const PrivacyPolicy = (props: any): JSX.Element => {
  const {t} = useTranslation('common');
  const {locale} = useRouter();
  return (
    <section>
      <Container>
        <H1>{t('PrivacyPolicyPage.title')}</H1>
        {buildDocument(docs[locale || 'ru'])}
      </Container>
    </section>
  );
};

import SC from '@emotion/styled';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {ibmplexsans400, maxDevice} from '../styles';
import {CompaniesList} from './companiesList';

const Container = SC.div`
  font-family: ${ibmplexsans400.style.fontFamily};
  padding: 23vh 140px 0 140px;
  @media ${maxDevice.tablet} {
    padding: 18vh 30px 0 30px;
  }
`;

const Brand = SC.h1`
  font-weight: 400;
  margin: 0 0 12px 0;
  font-size: 56px;
  line-height: 1.3;
  width: 80%;
  @media ${maxDevice.laptop} {
    font-size: 43px;
  }
  @media ${maxDevice.tablet} {
    width: 100%;
    font-size: 22px;
    margin: 0 0 8px 0;
  }
`;

export const Intro = (props: any) => {
  const {t} = useTranslation('common');
  return (
    <section id="intro">
      <Container>
        <Brand>{t('HomePage.Intro.title')}</Brand>
      </Container>
      <CompaniesList />
    </section>
  );
};

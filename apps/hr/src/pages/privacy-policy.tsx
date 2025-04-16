import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import React from 'react';

import {Meta, PrivacyPolicy} from '../components';
import {baseStaticProps} from '../helpers/baseStaticProps';

type PrivacyPolicyPageProps = {
  // Add custom props here
};

const PrivacyPolicyPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Meta />
      <PrivacyPolicy />
    </>
  );
};

export const getStaticProps: GetStaticProps<PrivacyPolicyPageProps> = baseStaticProps;

export default PrivacyPolicyPage;

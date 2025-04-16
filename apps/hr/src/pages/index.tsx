import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import React from 'react';

import {Clients, Intro, Meta, Services, TechStacks, WorkWithUs} from '../components';
import {baseStaticProps} from '../helpers/baseStaticProps';

type HomePageProps = {
  // Add custom props here
};

const HomePage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Meta />
      <Intro />
      <Services />
      <TechStacks />
      <WorkWithUs />
      <Clients />
    </>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = baseStaticProps;

export default HomePage;

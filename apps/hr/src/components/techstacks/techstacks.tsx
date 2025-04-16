import {useTranslation} from 'next-i18next';
import React from 'react';

import {TechCard} from '../card';
import {Slider} from '../slider';
import {responsive, slides} from './constants';
import {Container, Content, H3} from './techstacks.sc';

export const TechStacks = (props: any) => {
  const {t} = useTranslation('common');
  return (
    <Container id="techStacks">
      <Content>
        <H3>{t('HomePage.TechStacks.title')}</H3>
      </Content>
      <Slider responsive={responsive}>
        {slides.map((o, i) => (
          <TechCard key={i} {...o} />
        ))}
      </Slider>
    </Container>
  );
};

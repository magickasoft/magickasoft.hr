import {useTranslation} from 'next-i18next';
import React from 'react';

import {ServiceCard} from '../card';
import {Slider} from '../slider';
import {responsive, slides} from './constants';
import {Container, Content, H3} from './services.sc';

export const Services = (props: any) => {
  const {t} = useTranslation('common');
  return (
    <Container id="services">
      <Content>
        <H3>{t('HomePage.Services.title')}</H3>
      </Content>
      <Slider centerMode={false} responsive={responsive}>
        {slides.map((o, i) => (
          <ServiceCard index={i} key={i} {...o} />
        ))}
      </Slider>
    </Container>
  );
};

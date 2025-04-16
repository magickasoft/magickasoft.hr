import SC from '@emotion/styled';
import React from 'react';

import {ibmplexsans400, maxDevice} from '../styles';
import {Text} from './common';
import {Icon} from './icon';
import {LocaleSwitcher} from './localeSwitcher';
import {ScrollIndicator} from './scrollIndicator';

const Container = SC.header`
  font-family: ${ibmplexsans400.style.fontFamily};
  background: #ffffff05;
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.75rem;
  margin: 0 auto;
  padding: 0 140px;
  @media ${maxDevice.tablet} {
    padding: 0 30px;
    height: 3.5rem;
  }
`;

const SCIcon = SC(Icon)`
  background-color: #fff;
  border-radius: 50%;
  margin-left: 15px;
`;

const Label = SC.div`
  display: flex;
  flex-direction: column;
  @media ${maxDevice.tablet} {
    display: none
  }
`;

const Link = SC.a`
  font-size: 0.9rem;
  line-height: 1.125rem;
  background: linear-gradient(90deg,#fe00dd -56.25%,#fd0009 135.94%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Row = SC.div`
  display: flex;
  flex-direction: row;
`;

export const Header = (props: any) => {
  return (
    <>
      <ScrollIndicator />
      <Container>
        <Text>
          <strong>HR</strong>
        </Text>
        <Row>
          <LocaleSwitcher />
          <Label>
            <Link href="tel://+79537647035">+7 953 764 70 35</Link>
            <Link href="mailto:sjs-master@yandex.ru">sjs-master@yandex.ru</Link>
          </Label>
          <Link href="https://t.me/magickasoft">
            <SCIcon name="telegram" size={32} color="#0087D0" />
          </Link>
          <Link href="https://wa.me/79537647035">
            <SCIcon name="whatsApp" size={32} color="#27D061" />
          </Link>
        </Row>
      </Container>
    </>
  );
};

import SC from '@emotion/styled';
import React from 'react';

import {minDevice} from '../../styles';
import {socialLinks} from './constants';
import {Links} from './links';

const Container = SC.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  position: relative;
  @media ${minDevice.tablet} {
    flex-direction: row;
  }
`;

const Label = SC.div`
  padding: 1rem 0 0;
  color: #7f7f7f;
  font-size: 1rem;
  line-height: 1.375rem;
  @media ${minDevice.tablet} {
    padding: 0;
  }
`;

/**
 * Renders the Copyright component with the current year and social links.
 *
 * @returns {JSX.Element} The rendered Copyright component
 */
export const Copyright = (): JSX.Element => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <Label>© hr, {currentYear}</Label>
      <Links list={socialLinks} />
    </Container>
  );
};

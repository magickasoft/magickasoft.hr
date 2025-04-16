import SC from '@emotion/styled';
import React from 'react';

import {minDevice} from '../../styles';

const Container = SC.div`
  padding: 0.25rem 0 0;
  font-size: 1rem;
  line-height: 1.5rem;
  @media ${minDevice.tablet} {
    padding: 0;
  }
`;

/**
 * Renders a list of details with optional props.
 *
 * @param {Array} list - The list of details to render.
 * @param {Object} props - Optional props for the container.
 * @return {JSX.Element} The rendered details.
 */
export const Details = ({list = [], ...props}: any): JSX.Element => {
  return list.map((label: any) => (
    <Container key={label} {...props}>
      {label}
    </Container>
  ));
};

import SC from '@emotion/styled';

import {ibmplexsans400, maxDevice} from '../../styles';

export const Container = SC.div`
  font-family: ${ibmplexsans400.style.fontFamily};
  padding: 23vh 140px 0 140px;
  @media ${maxDevice.tablet} {
    padding: 18vh 30px 0 30px;
  }
`;

export const H1 = SC.h1`
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  padding-bottom: .3rem;
  font-size: 2rem;
  line-height: 1.25;
  @media ${maxDevice.tablet} {
    font-size: 1.375rem;
    margin: 0 0 0.5rem 0;
  }
`;

export const H2 = SC.h2`
  font-weight: 600;
  margin: 1rem 0 0.75rem 0;
  padding-bottom: .3rem;
  font-size: 1.5rem;
  line-height: 1.25;
  @media ${maxDevice.tablet} {
    font-size: 0.875rem;
    margin: 0.75rem 0 0.5rem 0;
  }
`;

export const H3 = SC.h3`
  font-weight: 500;
  margin: 1rem 0 0.75rem 0;
  padding-bottom: .3rem;
  font-size: 1.25rem;
  line-height: 1.25;
  @media ${maxDevice.tablet} {
    font-size: 0.825rem;
    margin: 0.75rem 0 0.5rem 0;
  }
`;

export const Block = SC.p`
  font-weight: 400;
  margin: 0 0 0.75rem 0;
  padding-bottom: .3rem;
  font-size: 0.875rem;
  line-height: 1.25;
  @media ${maxDevice.tablet} {
    font-size: 0.825rem;
    margin: 0 0 0.5rem 0;
  }
`;

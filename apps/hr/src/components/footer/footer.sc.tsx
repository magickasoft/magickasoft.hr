import SC from '@emotion/styled';

import {ibmplexsans400, maxDevice, minDevice} from '../../styles';
import {Links} from './links';

export const Container = SC.footer`
  font-family: ${ibmplexsans400.style.fontFamily};
  padding: 0 140px 0.75rem 140px;
  @media ${maxDevice.tablet} {
    padding: 0 30px 0.75rem 30px;
  }
`;

export const Content = SC.div`
  border-top: 1px solid #1f2326;
  padding-top: 3rem;
  @media ${maxDevice.tablet} {
    padding-top: 2.5rem;
  }
  @media ${maxDevice.mobileL} {
    padding-top: 2rem;
  }
`;

export const A = SC.a`
  transition: .25s ease;
  transition-property: background-position,border,color,left,margin,padding,right,opacity;
  color: #1f2326;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 2.625rem;
  background-image: linear-gradient(-90deg,#181818 0%,#181818 49.99%,#f1477e 50%,#fa477e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: 100%;
  background-size: 200%;
  &:hover {
    background-position: 0;
  }
  @media ${minDevice.mobileL} {
    font-size: 2rem;
  }
  @media ${minDevice.tablet} {
    font-size: 2.25rem;
    line-height: 2.9375rem;
  }
`;

export const Contacts = SC.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 0 2.5rem;
  @media ${minDevice.laptopL} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Email = SC.div`
  padding: 0 3rem 0 0;
`;

export const Docs = SC(Links)`
  margin-bottom: 15px;
`;

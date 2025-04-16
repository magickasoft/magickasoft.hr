import SC from '@emotion/styled';

import {ibmplexsans400, maxDevice} from '../../styles';

export const Container = SC.section`
  background-image: linear-gradient(to bottom,#edecec 200px,#fff 200px);
  overflow: hidden;
  padding: 0 0 50px 0;
  @media ${maxDevice.tablet} {
    padding: 0 0 30px 0;
  }
`;

export const Content = SC.div`
  font-family: ${ibmplexsans400.style.fontFamily};
  padding: 30px 140px 0 140px;
  @media ${maxDevice.tablet} {
    padding: 30px 30px 0 30px;
  }
`;

export const H3 = SC.h3`
  font-weight: 600;
  margin: 0 0 12px 0;
  font-size: 30px;
  line-height: 1.3;
  @media ${maxDevice.laptop} {
    font-size: 26px;
  }
  @media ${maxDevice.tablet} {
    font-size: 22px;
    margin: 0 0 8px 0;
  }
`;

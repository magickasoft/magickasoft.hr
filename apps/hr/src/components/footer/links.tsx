import SC from '@emotion/styled';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {minDevice} from '../../styles';
import {LinkProps, LinksProps} from './links.d';

const Container = SC.div`
  display: flex;
  flex-wrap: wrap;
  @media ${minDevice.tablet} {
    margin-left: auto;
  }
`;

const Link = SC.a`
  color: #181818;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  margin: 0 15px 0 0;
  background-image: linear-gradient(-90deg,#181818 0%,#181818 49.99%,#FD0009 50%,#FE00DD 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: 100%;
  background-size: 200%;
  
  &:hover {
    background-position: 0;
  }
  
  @media ${minDevice.tablet} {
    font-size: rem(16px);
    margin: rem(0 0 0 20px);
  }

  @media ${minDevice.laptop} {
    font-size: 14px;
    font-weight: normal;
  }
`;

/**
 * Renders a list of social links with translated labels.
 *
 * @param {LinksProps} props - The props for the Links component.
 * @param {LinkProps[]} props.list - The list of social links to render.
 * @param {React.CSSProperties} [props.style] - The style object for the container.
 * @returns {JSX.Element} - The rendered Links component.
 */
export const Links = ({list = [], ...props}: LinksProps): JSX.Element => {
  const {t} = useTranslation('common');

  return (
    <Container {...props}>
      {list.map(({label, ...restProps}: LinkProps) => (
        <Link key={label} {...restProps}>
          {t(label)}
        </Link>
      ))}
    </Container>
  );
};

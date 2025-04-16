import SC from '@emotion/styled';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {minDevice} from '../../styles';
import {LinkProps, LinksProps} from './links.d';

const Container = SC.nav`
  display: none;
  padding: 0 0 1rem;
  @media ${minDevice.laptop} {
    display: block;
  }
`;

const Content = SC.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: calc(380px);
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Li = SC.li`
  padding: 0 0 0.25rem;
  width: 10rem;
  display: list-item;
  text-align: -webkit-match-parent;
`;

const Link = SC.div`
  cursor: pointer !important;
  color: #22262A;
  font-size: 14px;
  line-height: 20px;
  background-image: linear-gradient(-90deg,#181818 0%,#181818 49.99%,#FD0009 50%,#FE00DD 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: 100%;
  background-size: 200%;

  &:hover {
    background-position: 0;
  }
`;

/**
 * Renders a list of navigation links with translated labels.
 *
 * @param {LinksProps} props - The props for the NavLinks component.
 * @param {LinkProps[]} props.list - The list of navigation links to render.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props.props] - The additional props for the container.
 * @returns {JSX.Element} - The rendered NavLinks component.
 */
export const NavLinks = ({list = [], ...props}: LinksProps): JSX.Element => {
  const {t} = useTranslation('common');

  return (
    <Container {...props}>
      <Content>
        {list.map(({label, ...restProps}: LinkProps) => (
          <Li key={label}>
            <Link>
              <a {...restProps}>{t(label)}</a>
            </Link>
          </Li>
        ))}
      </Content>
    </Container>
  );
};

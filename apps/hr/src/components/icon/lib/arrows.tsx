import React from 'react';

export const template = ({color = '#777777', path, ...rest}: any) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d={path} fill={color} />
  </svg>
);

export const arrowBack = (props: any) =>
  template({
    path: 'M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z',
    ...props,
  });

export const arrowForward = (props: any) =>
  template({
    path: 'M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z',
    ...props,
  });

export const arrowDown = (props: any) =>
  template({
    path: 'M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z',
    ...props,
  });

export const arrowUp = (props: any) =>
  template({
    path: 'M16.59 15.4099L12 10.8299L7.41 15.4099L6 13.9999L12 7.99991L18 13.9999L16.59 15.4099Z',
    ...props,
  });

export const breakpoint = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const mediaQuery = (property: string) => ({
  mobileS: `(${property}: ${breakpoint.mobileS})`,
  mobileM: `(${property}: ${breakpoint.mobileM})`,
  mobileL: `(${property}: ${breakpoint.mobileL})`,
  tablet: `(${property}: ${breakpoint.tablet})`,
  laptop: `(${property}: ${breakpoint.laptop})`,
  laptopL: `(${property}: ${breakpoint.laptopL})`,
  desktop: `(${property}: ${breakpoint.desktop})`,
  desktopL: `(${property}: ${breakpoint.desktop})`,
});

export const minDevice = mediaQuery('min-width');

export const maxDevice = mediaQuery('max-width');

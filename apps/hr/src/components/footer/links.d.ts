export type LinkProps = {
  label: TFunction<Ns, KPrefix>;
  href: string;
  target?: string;
};

export type LinksProps = {
  list: Array<LinkProps>;
  style?: React.CSSProperties;
};

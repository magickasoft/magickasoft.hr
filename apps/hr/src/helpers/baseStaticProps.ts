import type {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

type Props = {
  // Add custom props here
};

export const baseStaticProps: GetStaticProps<Props> = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
  },
});

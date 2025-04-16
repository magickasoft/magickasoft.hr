// @ts-ignore
import withYM from 'next-ym';

export const YA_METRIKA_ID = process.env.YA_METRIKA_ID;
export const env = process.env.NODE_ENV;

export const reachGoal = (name: any) => {
  // @ts-ignore
  if (window[`yaCounter${YA_METRIKA_ID}`] && env !== 'development') {
    // @ts-ignore
    window[`yaCounter${YA_METRIKA_ID}`].reachGoal(name);
  }
};

// reachGoal('contact_phone');

export {withYM};

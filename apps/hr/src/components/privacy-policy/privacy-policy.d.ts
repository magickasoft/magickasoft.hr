import {StyledComponent} from '@emotion/styled';

export type ComponentContentPair = [StyledComponent<any>, string | string[]];

export type Document = ComponentContentPair[];

export type Documents = {
  [key: string]: Document;
};

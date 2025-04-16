import {point768, point1024, point1440, point2560} from '../slider';
import {analytics, backend, cLevel, design, devOps, frontend, platformApps, pm, qa} from './technology';

export const responsive = [point2560(3, 2), point1440(2, 1), point1024(2, 1), point768(1, 1)];

export const slides = [
  {items: [backend, qa]},
  {items: [frontend]},
  {items: [platformApps, analytics]},
  {items: [devOps, design]},
  {items: [pm, cLevel]},
];

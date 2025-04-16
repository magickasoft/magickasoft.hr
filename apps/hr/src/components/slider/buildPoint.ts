/**
 * Returns a function that takes in the number of slides to show and the number of slides to scroll,
 * and returns an object with the given breakpoint and settings.
 *
 * @param {number} slidesToShow - The number of slides to show.
 * @param {number} slidesToScroll - The number of slides to scroll.
 * @return {{breakpoint: number, settings: {slidesToShow: number, slidesToScroll: number}}} - The object with the given breakpoint and settings.
 */
export const buildPoint = (breakpoint: number) => (slidesToShow: number, slidesToScroll: number) => ({
  breakpoint,
  settings: {
    slidesToShow,
    slidesToScroll,
  },
});

export const point2560 = buildPoint(2560);

export const point1440 = buildPoint(1440);

export const point1024 = buildPoint(1024);

export const point768 = buildPoint(768);

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SC from '@emotion/styled';
import React from 'react';
import RSlider from 'react-slick';

import {maxDevice} from '../../styles';
import {Icon} from '../icon';

const Controls = SC.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 140px 0 140px;
  @media ${maxDevice.tablet} {
    padding: 0 30px 0 30px;
  }
`;

const Btn = SC.div`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type SliderProps = {
  title?: any;
  initialSlide?: number;
  children?: any;
  withControls?: boolean;
  centerMode?: boolean;
  responsive?: any;
};

const sliderOptions = {
  className: 'center',
  centerMode: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Slider = ({withControls = true, initialSlide = 0, children, ...props}: SliderProps) => {
  const slider: any = React.useRef();
  const [hasSetPosition, setHasSetPosition] = React.useState(false);

  const options = {
    initialSlide,
    ...sliderOptions,
    ...props,
  };

  React.useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current?.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition, slider]);

  return (
    <>
      {withControls && (
        <Controls>
          <Btn onClick={slider.current?.slickPrev}>
            <Icon name="arrowBack" />
          </Btn>
          <Btn onClick={slider.current?.slickNext}>
            <Icon name="arrowForward" />
          </Btn>
        </Controls>
      )}
      <RSlider ref={slider} {...options}>
        {children}
      </RSlider>
    </>
  );
};

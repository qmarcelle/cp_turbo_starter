/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import leftIcon from '../../../public/assets/left_white_slider.svg';
import rightIcon from '../../../public/assets/right_white_slider.svg';
import { Button } from './Button';
import { Spacer } from './Spacer';

interface SlidingCarouselProps {
  children: JSX.Element[];
}

const PreviousBtn = (props: any) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <Button
            className="max-w-fit max-h-fit p-2 m-auto"
            type="elevated"
            callback={() => {}}
            icon={
              <Image className="icon-sm" src={leftIcon} alt="scroll left" />
            }
          />
        </div>
      )}
    </>
  );
};
const NextBtn = (props: any) => {
  const { className, onClick, slideCount, currentSlide, slidesToShow } = props;
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <Button
            className="max-w-fit max-h-fit p-2 m-auto"
            type="elevated"
            callback={() => {}}
            icon={
              <Image className="icon-sm" src={rightIcon} alt="scroll right" />
            }
          />
          ,
        </div>
      )}
    </>
  );
};

export const SlidingCarousel = ({ children }: SlidingCarouselProps) => {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(0);
  const settings: Settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 500,

    nextArrow: <NextBtn slidesToShow={slidesToShow} />,
    prevArrow: <PreviousBtn />,
    onReInit: () => {
      if (sliderRef.current) {
        setSlidesToShow(sliderRef?.current?.innerSlider.props.slidesToShow);
      }
    },
    afterChange: (currentSlide) => {
      setCurrentSlide(currentSlide);
    },
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const progress = Math.round(
    ((currentSlide + slidesToShow) / children.length) * 100,
  );

  return (
    <div className="slider-container carousel flex flex-col">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
      <Spacer size={8} />
      <div className="w-[200px] bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 self-center">
        <div
          className="primary-bg-color h-1.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

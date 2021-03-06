import React, { useState } from "react";
import Slider from "react-slick";
import styled, { css, keyframes } from "styled-components";
import { useAppSelector } from "hooks";
import { IAdvertisement } from "./interfaces/advertisement.interface";
import { selectAdvertises } from "./advertisesSlice";
import { Span } from "../../styles/global-styled";
import ProgressBar from "components/html-elements/ProgressBar";

/* imoprt css */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type TAfterChange = (currentSlide: number) => void;
type TBeforeChange = (currentSlide: number, nextSlide: number) => void;

const SlickDivAnimation = keyframes`
  from {
    background-size: 105% auto;
    
  }
  to {
    background-size: 100% auto;
  }
`;

const SlickDiv = styled.div<{ img: string }>`
  width: 50%;
  height: 600px;
  box-sizing: border-box;
  ${(props: any) => {
    const img = props.img;
    return css`
      background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.1) 30%,
          rgba(0, 0, 0, 0.2) 70%,
          rgba(0, 0, 0, 0.5) 100%
        ),
        url(${img});
      background-size: cover;
    `;
  }}

  //animation-duration: 5s;
  //animation-timing-function: ease-in-out;
  //animation-name: ${SlickDivAnimation};
  //animation-fill-mode: forwards;
  //animation-iteration-count: infinite;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SlickTitle = styled.h3`
  position: absolute;
  left: 20%;
  top: 66%;
  margin: 0 auto;
  font-size: 20px;
  color: white;
  font-size: 45px;
  font-weight: 100;
  font-family: "NotoSansKR-Light";
`;

const SlickText = styled.h3`
  position: absolute;
  left: 20%;
  top: 77%;
  margin: 0 auto;
  color: white;
  font-size: 37px;
  font-weight: 600;
  font-family: "NotoSansKR-Light";
`;

const SlickBottom = styled.h3`
  position: absolute;
  left: 20%;
  top: 65%;
  margin: 0 auto;
  font-size: 20px;
  color: white;
  font-size: 30px;
  font-weight: 100;
  font-family: "NotoSansKR-Light";
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;
  }

  .slick-slide div {
    /* cursor: pointer; */
  }

  .slick-dots {
    bottom: -50px;
    margin-top: 200px;
  }

  .slick-track {
    overflow-x: hidden;
  }
`;

const AdvertisesSlider = () => {
  const advertises = useAppSelector(selectAdvertises);

  const [position, setPosition] = useState({
    slideIndex: 1,
    total: advertises.length,
  });

  const afterChangeFun: TAfterChange = (idx: number) => {
    setPosition({
      ...position,
      slideIndex: idx + 1,
    });
  };

  const beforeChangeFun: TBeforeChange = (current: number, next: number) => {
    //setPosition({ ...position, slideIndex: next + 1 });
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0px",
    pauseOnHover: true,
    afterChange: (cur: number) => afterChangeFun(cur),
    beforeChange: (current: number, next: number) =>
      beforeChangeFun(current, next),
  };

  const renderedAdvertises = advertises.map((item: IAdvertisement) => (
    <SlickDiv img={item.img} key={item.id}>
      <SlickTitle>
        <Span>{item.title}</Span>
      </SlickTitle>
      <SlickText>
        <Span>{item.subTitle}</Span>
      </SlickText>
    </SlickDiv>
  ));

  return (
    <div className="SlickComponent">
      <StyledSlider {...settings}>{renderedAdvertises}</StyledSlider>
      <ProgressBar
        wPercent={20}
        position={position.slideIndex / position.total}
      />
    </div>
  );
};

export default AdvertisesSlider;

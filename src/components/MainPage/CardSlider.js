import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import test1 from "../../images/main/slider/test1.png";
import test2 from "../../images/main/slider/test2.png";
import test3 from "../../images/main/slider/test3.png";
import test4 from "../../images/main/slider/test4.png";

import text from "../../images/main/slider/text.svg";

const CardSlider = () => {
  const elementLength = 5;
  const [count, setCount] = useState(1);

  const boolean = useRef(false);

  useEffect(() => {
    const timer = setInterval(
      () => {
        if (count < elementLength - 1) {
          boolean.current = false;
          setCount(prev => prev + 1);
        } else {
          boolean.current = true;
          setCount(0);
        }
      },
      boolean.current ? 0 : 2500,
    );

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <ViewWindow>
      <Shadow />
      <Elements count={count}>
        <Element name="1">
          <Img src={test1} />
          <Text src={text} />
        </Element>
        <Element name="1">
          <Img src={test1} />
          <Text src={text} />
        </Element>
        <Element name="2">
          <Img src={test2} />
          <Text src={text} />
        </Element>
        <Element name="3">
          <Img src={test3} />
          <Text src={text} />
        </Element>
        <Element name="4">
          <Img src={test4} />
          <Text src={text} />
        </Element>
      </Elements>
    </ViewWindow>
  );
};

export default CardSlider;

const Shadow = styled.div`
  position: absolute;

  pointer-events: none;

  z-index: 10;
  width: 221px;
  height: 363px;
  border-radius: 110px;

  box-shadow: inset 1px 4px rgba(0, 0, 0, 0.25);
`;

const ViewWindow = styled.div`
  pointer-events: none;

  z-index: 5;
  width: 221px;
  height: 363px;
  border-radius: 110px;

  box-shadow: inset 5px 5px 10px 5px rgb(77, 71, 71);

  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const Elements = styled.div`
  display: flex;
  align-items: center;

  transition: ${props => (props.boolean ? "" : "transform 1.5s ease-in")};
  transform: ${props => "translateX(-" + props.count * 221 + "px)"};

  width: 2800px;
  height: 362px;

  transition: all 1000ms ease 0s;
`;
const Element = styled.div`
  position: relative;
  width: 221px;
  height: 362px;
`;

const Img = styled.img`
  width: 221px;
  height: 362px;
`;

const Text = styled.img`
  position: absolute;
  top: 70px;
  left: 70px;
`;

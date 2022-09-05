import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import card1 from "../../images/main/slider/card1.svg";
import card2 from "../../images/main/slider/card2.svg";
import card3 from "../../images/main/slider/card3.svg";
import card4 from "../../images/main/slider/card4.svg";

import test1 from "../../images/main/slider/test1.png";
import test2 from "../../images/main/slider/test2.png";
import test3 from "../../images/main/slider/test3.png";
import test4 from "../../images/main/slider/test4.png";

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
        <Element name="1" src={test1} />
        <Element name="1" src={test1} />
        <Element name="2" src={test2} />
        <Element name="3" src={test3} />
        <Element name="4" src={test4} />
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
const Element = styled.img`
  width: 221px;
  height: 362px;

  background: ${props => "#" + props.color};
`;

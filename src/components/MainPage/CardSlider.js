import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const CardSlider = () => {
  const elementLength = 4;
  const [count, setCount] = useState(0);

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
      <Elements count={count}>
        <Element name="1" color="F4BFBF">
          One
        </Element>
        <Element name="2" color="FFD9C0">
          Two
        </Element>
        <Element name="3" color="FAF0D7">
          Three
        </Element>
        <Element name="copy 1" color="F4BFBF">
          Copy One
        </Element>
      </Elements>
    </ViewWindow>
  );
};

export default CardSlider;

const ViewWindow = styled.div`
  width: 221px;
  height: 362px;
  border-radius: 116px;
  border: 2px solid red;

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

  border: 1px solid blue;
  width: 2800px;
  height: 362px;

  transition: all 1000ms ease 0s;
`;
const Element = styled.div`
  width: 221px;
  height: 362px;

  background: ${props => "#" + props.color};
`;

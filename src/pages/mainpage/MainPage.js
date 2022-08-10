import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "../../styles/star.css";
import { Star } from "../../images/stars/star";
import background from "../../images/background.png";

const MainPage = () => {
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
    <GrayBackground>
      <Star></Star>
      <Text>안녕하세요</Text>

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
    </GrayBackground>
  );
};

export default MainPage;

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

const Text = styled.p`
  font-family: var(--ph-font);
`;

const GrayBackground = styled.div`
  position: relative;

  width: 100%;
  height: 774px;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;

  z-index: -5;
`;

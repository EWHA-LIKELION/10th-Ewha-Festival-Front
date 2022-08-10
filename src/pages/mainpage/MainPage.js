import styled, { createGlobalStyle } from "styled-components";
import "../../styles/star.css";
import { Star } from "../../images/stars/star";
import main from "../../images/background.svg";

const MainPage = () => {
  return (
    <GrayBackground>
      <Star></Star>
      <div className="back"></div>
    </GrayBackground>
  );
};

export default MainPage;

const GrayBackground = styled.div`
  position: relative;

  width: 100%;
  height: 774px;

  background-image: url(${main});
  background-repeat: no-repeat;
  background-size: cover;

  z-index: -5;
`;

import { Star } from "../../images/stars/star";
import main from "../../images/background.svg";
import "../../styles/star.css";
import { createGlobalStyle } from "styled-components";

const Star1 = () => {
  return (
    <div>
      <GlobalStyle />
      <div className="top">
        <Star></Star>
        <div className="back"></div>
      </div>
    </div>
  );
};

export default Star1;

const GlobalStyle = createGlobalStyle`
.top{
background-image: url(${main});
    z-index: -5;
  position: relative;
  width: 100%;
  height: 500px;
}

`;

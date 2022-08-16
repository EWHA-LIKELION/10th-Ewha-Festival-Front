import React from "react";
import styled from "styled-components";

// css
// import "../../styles/star.css";

import star1 from "../../images/stars/star1.svg";
import star2 from "../../images/stars/star2.svg";
import star3 from "../../images/stars/star3.svg";
import star4 from "../../images/stars/star4.svg";
import star5 from "../../images/stars/star5.svg";

const Stars = () => {
  return (
    <Box>
      <Sparkle className="sparkle" style={{ top: "0", left: "60px" }} />

      {/* 왼쪽 */}

      <Star src={star1} className="star1" style={{ top: "0", left: "34px" }} />

      <Star
        src={star3}
        className="star3"
        style={{ top: "60px", left: "30px", width: "22px", height: "22px" }}
      />

      {/* 오른쪽 */}
      <Star
        src={star2}
        className="star2"
        style={{ top: "23px", left: "310px" }}
      />

      <Star
        src={star5}
        className="star5"
        style={{ top: "104px", left: "312px" }}
      />

      <Star
        src={star3}
        className="star3"
        style={{ top: "61px", left: "306px" }}
      />

      {/* 왼 아래 */}

      <Star
        src={star3}
        className="star3"
        style={{ top: "266px", left: "38px" }}
      />

      <Star
        src={star4}
        className="star4"
        style={{ top: "290px", left: "50px" }}
      />

      <Star
        src={star5}
        className="star5"
        style={{ top: "346px", left: "38px" }}
      />
    </Box>
  );
};
const Box = styled.div`
  width: 0;
`;
const Star = styled.img`
  position: absolute;

  @media (max-width: 375px) {
    transform: translate(-40px, 0);
  }
`;

const Sparkle = styled.div`
  position: absolute;

  width: 3px;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.5);

  transform: rotate(45deg);
`;

export default Stars;

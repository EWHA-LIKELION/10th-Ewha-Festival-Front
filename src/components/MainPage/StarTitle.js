import styled from "styled-components";
import { PyeongChang } from "../../components/Text";

import star3 from "../../images/stars/star3.svg";

const StarTitle = ({ title, margin }) => {
  return (
    <SmallTitle margin={margin}>
      <TitleStar src={star3} />
      <PyeongChang weight="700" color="#858585" size="15px" height="28px">
        {title}
      </PyeongChang>
      <TitleStar src={star3} />
    </SmallTitle>
  );
};

const SmallTitle = styled.div`
  display: flex;
  margin: ${({ margin }) => margin};
`;

const TitleStar = styled.img`
  margin: 0 8px 0 8px;
`;

export default StarTitle;

import styled from "styled-components";
import { PyeongChang } from "../../components/Text";

import star3 from "../../images/stars/star3.svg";

const StarTitle = ({ title, margin }) => {
  return (
    <SmallTitle margin={margin}>
      <object
        type="image/svg+xml"
        data={star3}
        style={{ margin: "0 8px 0 8px" }}
      >
        <TitleStar src={star3} />
      </object>

      <PyeongChang weight="700" color="#858585" size="15px" height="28px">
        {title}
      </PyeongChang>
      <object
        type="image/svg+xml"
        data={star3}
        style={{ margin: "0 8px 0 8px" }}
      >
        <TitleStar src={star3} />
      </object>
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

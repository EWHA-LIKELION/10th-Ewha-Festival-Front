import styled from "styled-components";
import star from "../../images/stars/star3.svg";
import { PyeongChang_Peace } from "../../components/Text";

const PartTitle = ({ title }) => {
  return (
    <>
      <PartTitleContainer>
        <PartTitleTextContainer>
          <Star src={star} />
          <PyeongChang_Peace size="16px" weight="300" color="var(--green3)">
            {title}
          </PyeongChang_Peace>
        </PartTitleTextContainer>
        <Border />
      </PartTitleContainer>
    </>
  );
};

export default PartTitle;

const PartTitleContainer = styled.div`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  margin-top: 10px;
`;

const PartTitleTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const Star = styled.img`
  width: 18px;
  height: 30px;
  margin-right: 10px;
`;

const Border = styled.div`
  border-bottom: 1px solid var(--gray);
  width: 100%;
  height: 0;
  margin-top: 7px;
`;

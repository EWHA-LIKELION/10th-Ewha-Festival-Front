import styled from "styled-components";
import { Pretendard } from "../Text";

const TimeLine = ({ title, time }) => {
  return (
    <Event>
      <Pretendard color="#878787" size="13px" weight="700">
        {title}
      </Pretendard>
      <Pretendard color="#004628" weight="500" size="10px">
        {time}
      </Pretendard>
    </Event>
  );
};

export default TimeLine;
const Event = styled.div`
  text-align: center;
  margin-top: 12px;
`;

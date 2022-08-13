import styled from "styled-components";
import github from "../../images/footer/github.svg";
import insta from "../../images/footer/insta.svg";
import { Pretendard } from "../Text";

const Footer = () => {
  return (
    <Wrapper>
      <hr style={{ marginBottom: "36px" }} />
      <Pretendard color="#6C6C6C" weight="500" size="11px" height="18px">
        멋쟁이 사자처럼 10기 | https://open.kakao.com/o/sUzTxYue
      </Pretendard>
      <Pretendard color="#6C6C6C" weight="500" size="11px" height="18px">
        Likelion Ewha - 10th | https://open.kakao.com/o/sUzTxYue
      </Pretendard>

      <div
        style={{
          display: "flex",
          width: "80px",
          justifyContent: "space-around",
          margin: "24px auto 0 auto",
        }}
      >
        <img src={github} />
        <img src={insta} />
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

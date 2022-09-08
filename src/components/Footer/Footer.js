import styled from "styled-components";
import github from "../../images/footer/github.svg";
import insta from "../../images/footer/insta.svg";
import graylikelion from "../../images/footer/graylikelion.svg";

import { Pretendard } from "../Text";

const Footer = () => {
  return (
    <Wrapper>
      <hr style={{ marginBottom: "36px", backgroundColor: "#A5A5A5" }} />
      <a
        href="https://open.kakao.com/o/sgTvYBZd"
        style={{ textDecoration: "none" }}
      >
        <Pretendard color="#6C6C6C" weight="500" size="11px" height="18px">
          멋쟁이 사자처럼 10기 | https://open.kakao.com/o/sgTvYBZd
        </Pretendard>
      </a>
      <a
        href="https://open.kakao.com/o/sgTvYBZd"
        style={{ textDecoration: "none" }}
      >
        <Pretendard color="#6C6C6C" weight="500" size="11px" height="18px">
          Likelion Ewha - 10th | https://open.kakao.com/o/sgTvYBZd
        </Pretendard>
      </a>

      <div
        style={{
          display: "flex",
          width: "80px",
          justifyContent: "space-around",
          margin: "24px auto 0 auto",
        }}
      >
        <a
          href="https://www.instagram.com/likelion_ewha/"
          style={{ textDecoration: "none" }}
        >
          <object type="image/svg+xml" data={graylikelion}>
            <img src={graylikelion} />
          </object>
        </a>
        <a
          href="https://github.com/EWHA-LIKELION"
          style={{ textDecoration: "none" }}
        >
          <img src={github} />
        </a>
        <a
          href="https://www.instagram.com/likelion_ewha/"
          style={{ textDecoration: "none" }}
        >
          <img src={insta} />
        </a>
      </div>

      <Pretendard
        color="rgba(165, 165, 165, 1)"
        weight="300"
        size="8px"
        height="18px"
        margin="22px auto 26px auto"
      >
        Copyright ⓒ Likelion Ewha 10th. All Rights Reserved.
      </Pretendard>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 180px;
  text-align: center;
`;

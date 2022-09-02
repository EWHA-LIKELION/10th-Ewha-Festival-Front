import styled, { css } from "styled-components";
import { useState, useEffect } from "react";

import { PyeongChang_Peace, Pretendard } from "../../components/Text";

import Footer from "../../components/Footer/Footer";
import Map from "../../images/map.svg";
import TitleBar from "../../components/TitleBar";
import pinbtn from "../../images/trash/pinbtn.svg";
import posco from "../../images/trash/posco.svg";
import life1 from "../../images/trash/life1.svg";
import life2 from "../../images/trash/life2.svg";
import student from "../../images/trash/student.svg";

const TrashPage = () => {
  return (
    <>
      <TitleBar>
        <span style={{ color: "var(--green1)" }}>쓰레</span>
        <span style={{ color: "var(--green2)" }}>기통 </span>
        <span style={{ color: "var(--green3)" }}>지도</span>
      </TitleBar>
      <Tbox>
        <div>
          <PyeongChang_Peace>다시쓰는</PyeongChang_Peace>
        </div>
        <PyeongChang_Peace>
          이화의 <span>초록</span>
        </PyeongChang_Peace>
      </Tbox>
      <Mapimg>
        <img id="pin1" src={pinbtn} />
        <img id="pin2" src={pinbtn} />
        <img id="pin3" src={pinbtn} />
        <img id="pin4" src={pinbtn} />
        <img id="pin5" src={pinbtn} />
      </Mapimg>
      <LocationBox>
        <LocationImg />
        <LocationInfo>
          <p className="name">정문</p>
          <p className="info">정문 24번 부스 옆</p>
        </LocationInfo>
      </LocationBox>
      <LocationBox>
        <LocationImg src={student} />
        <LocationInfo>
          <p className="name">학생문화관</p>
          <p className="info">학생문화관 7~14번 부스 건너편 공간</p>
        </LocationInfo>
      </LocationBox>
      <LocationBox>
        <LocationImg src={life1} />
        <LocationInfo>
          <p className="name">생활환경관(1)</p>
          <p className="info">생활환경관 입구</p>
        </LocationInfo>
      </LocationBox>
      <LocationBox>
        <LocationImg src={life2} />
        <LocationInfo>
          <p className="name">생활환경관(2)</p>
          <p className="info">생활환경관 20번 부스 옆</p>
        </LocationInfo>
      </LocationBox>
      <LocationBox>
        <LocationImg src={posco} />
        <LocationInfo>
          <p className="name">포스코관</p>
          <p className="info">포스코관 건물 옆</p>
        </LocationInfo>
      </LocationBox>
      <Footer />
    </>
  );
};

export default TrashPage;

const Tbox = styled.div`
  width: fit-content;
  margin: 32px auto 0;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  span {
    color: #007a28;
  }
  div {
    width: fit-content;
    margin: auto;
  }
`;

const Mapimg = styled.div`
  width: 347px;
  height: 350px;
  margin: auto;
  background-image: url(${Map});
  background-repeat: no-repeat;
  background-size: 347px 350px;

  img {
    position: absolute;
    width: 17px;
  }
  img:active {
    width: 34px;
    transform: translate(-5px, -20px);
  }
  #pin1 {
    top: 325px;
    left: 215px;
  }
  #pin2 {
    top: 345px;
    left: 180px;
  }
  #pin3 {
    top: 377px;
    left: 160px;
  }
  #pin4 {
    top: 400px;
    left: 135px;
  }
  #pin5 {
    top: 417px;
    left: 260px;
  }
  #mapimg {
    display: block;
  }
`;

const LocationBox = styled.div`
  margin: 29px auto 36px;
  width: 335px;
  height: 120px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.075);
  display: flex;
`;
const LocationImg = styled.img`
  background-color: #f6f6f6;
  margin-right: 14px;
  width: 120px;
  height: 120px;
  border-radius: 10px 0 0 10px;
  border: red;
`;

const LocationInfo = styled.div`
  width: 176px;
  padding: 30px 0 20px 0;
  .name {
    font-size: 15px;
    font-family: "Pretendard-Regular";
    font-weight: 700;
    color: var(--green3);
  }

  .info {
    font-size: 11px;
    font-family: "Pretendard-Regular";
    font-weight: 400;
    line-height: 16px;
    color: var(--black);
    margin-top: 15px;
  }
`;

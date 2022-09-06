import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
// images
import background from "../../images/makerspage/background.png";
import { ReactComponent as Backbutton } from "../../images/navbar/back.svg";
import toplogo from "../../images/main/toplogo.svg";
import likelion from "../../images/makerspage/likelionLogo.svg";
import diaIcon from "../../images/makerspage/diaIcon.svg";
//fonts
import {
    PyeongChang_Peace,
    PyeongChang,
    Pretendard,
  } from "../../components/Text";
//components 
import Footer from "../../components/Footer/Footer";
import Team from "../../components/MakersPage/Team";
import TfTeam from "../../components/MakersPage/TfTeam";

const MakersPage = () => {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
      };
    return (
    <Wrapper>
        <Title>
            <div className="top1">
                <ButtonWrapper>
                        <Backbutton onClick={handleBackButton}></Backbutton>
                </ButtonWrapper>
                <TopLogo src={toplogo}/>
                <PyeongChang_Peace>를 만든이들</PyeongChang_Peace>
            </div>
            <Pretendard className="top2">
                <div>
                    <p style={{marginRight: "2px"}}>3년만에 돌아온 이화의 대동제</p>
                    <p style={{color: "var(--green1)", fontWeight: 600}}>R</p>
                    <p style={{color: "var(--green2)", fontWeight: 600}}>E</p>
                    <p style={{color: "var(--green3)", fontWeight: 600}}>:WHA</p>
                    <p>는</p>
                </div>
                <div>
                    <p style={{color: "var(--green2)", fontWeight: 600}}>이화여대 멋쟁이사자처럼 10기</p>
                    <p style={{marginRight: "2px"}}>와</p>
                    <p style={{color: "var(--green2)", fontWeight: 600}}>136주년 대동제 TF팀</p> 
                    <p>이 함께 만들었습니다.</p>
                </div>
            </Pretendard>
            <PyeongChang className="top3">
               <img src={likelion}/>
               <p>X</p>
               <p>136주년 대동제 TF</p>
            </ PyeongChang>
        </Title>
        <LikelionTeam>
            <PyeongChang_Peace className="lionTitle">
                <img src={diaIcon} style={{marginRight:"5px"}}/>
                <p>이화여대 멋쟁이 사자처럼 10기</p>
            </PyeongChang_Peace>
            <div className="line1"/>
            <Team teamName="기획・디자인"/>
            <Team teamName="백엔드 개발"/>
            <Team teamName="프론트엔드 개발"/>
        </LikelionTeam>
        <TF_Team>
            <PyeongChang_Peace className="tfTitle">
                <img src={diaIcon} style={{marginRight:"5px"}}/>
                <p>136주년 대동제 TF</p>
            </PyeongChang_Peace>
            <div className="line1"/>
            <TfTeam teamName="기획"/>
            <TfTeam teamName="사무"/>
            <TfTeam teamName="무대"/>
            <TfTeam teamName="홍보"/>
            <TfTeam teamName="연대"/>
            <TfTeam teamName="부스"/>
            <TfTeam teamName="꼬우미"/>
        </TF_Team>
        <Footer/>
    </Wrapper>
  );
};

export default MakersPage;

const Wrapper = styled.div`
  height: 3941px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;
const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 48px;
`;

const Title = styled.div`
  height: 143px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 99px;

  div {
    display: flex;
  }
  .top1 {
    font-weight: 300;
    font-size: 20px;
    p {
      margin: 2px 0 0 7.05px;
    }
  }
  .top2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 99px;
    div{
        display: flex;
    }
    .top1{
        width: 335px;
        font-weight: 300;
        font-size: 20px;
        p{margin: 2px 0 0 7.05px;}
    }
    .top2{
        display: flex;
        flex-direction: column;
        align-items: center;

        font-weight: 300;
        font-size: 10px;
    }
    .top3{
        width: 218px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 18.75px;

        font-weight: 300;
        font-size: 16px;
        font-weight: 400;
    }
`
const TopLogo = styled.img`
  width: 138px;
  height: 33px;
`;
const LikelionTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .lionTitle {
    width: 100%;
    margin-top: 32.25px;

    display: flex;
    font-weight: 300;
    font-size: 14px;
  }
  .line1 {
    width: 335px;
    height: 0.3px;
    background: var(--black);
  }
`;
const TF_Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  .tfTitle {
    width: 100%;
    margin-top: 32.25px;

    display: flex;
    font-weight: 300;
    font-size: 14px;
  }
  .line1 {
    width: 335px;
    height: 0.3px;
    background: var(--black);
  }
`;

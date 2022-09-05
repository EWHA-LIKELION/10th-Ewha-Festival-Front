import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
//components
import TfMember from "./TfMember";

//fonts
import {
    PyeongChang,
    Pretendard,
  } from "../../components/Text";
//data
import { makersData } from "../../_mock/makersData";


const TfTeam = ({teamName}) =>{
    const data = makersData;
    const team = data.filter(member=>member.team == teamName);
    const member = team.filter((team,index) => index > 0 );

    return(
        <TeamContainer>
            <PyeongChang className="title">&lt; {teamName} 팀 &gt;</PyeongChang>
            {<Info>{team[0].task}</Info>}
            <div className="leader">
                <p style={{fontWeight: "500",fontSize: "12px"}}>{teamName}팀장</p>
                <p style={{fontWeight: "700",fontSize: "14px", marginTop:"16px"}}>{team[0].name}</p>
                <p style={{fontWeight: "300", fontSize: "12px", color: "var(--green1)"}}>{team[0].dept}</p>
            </div>
            <p style={{fontWeight: "500",fontSize: "12px" ,marginTop:"16px"}}>{teamName}팀원</p>
            <div className="team">
                {member.map(member=>
                <TfMember memberName={member.name} dept={member.dept}/>
            )}
            </div>
        </TeamContainer>
    )
}
export default TfTeam;

const TeamContainer = styled.div`
    width: 312px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 31.75px;
    white-space: pre-wrap;
    color: var(--green3);
    font-family: 'Pretendard';

    .title{ 
        text-align: center;
        size: 14px;
        font-weight: 700;
    }
    .leader{
        font-weight: 500;
        font-size: 12px;
    }
    .team{
        width: 225px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 8px;
    }
`
const Info = styled.div`
    margin: 8px 0 24px 0;
    text-align: center;

    color: var(--green3);
    font-weight: 400;
    font-size: 10px;
`


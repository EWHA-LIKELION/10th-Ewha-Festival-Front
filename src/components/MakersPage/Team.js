import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
//components
import Member from "./Member";
//fonts
import {
    PyeongChang,
    Pretendard,
  } from "../../components/Text";
//data
import { makersData } from "../../_mock/makersData";

const Team = ({teamName}) =>{
    const data = makersData;
    const member = data.filter(member=>member.team == teamName);
    return(
        <TeamContainer>
            <PyeongChang className="title">&lt; {teamName} 팀 &gt;</PyeongChang>
            {member.map(member=>
                <Member memberName={member.name} dept={member.dept} task={member.task}/>
            )}
        </TeamContainer>
    )
}
export default Team;

const TeamContainer = styled.div`
    width: 312px;
    align-items: center;
    justify-content: center;
    margin-top: 31.75px;
    .title{ 
        text-align: center;
        color: var(--green3);
        size: 14px;
        font-weight: 700;
    }
`
const Members = styled.div`
    display: flex;
    flex-direction: column;
`

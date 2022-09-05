import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
//fonts
import {
    PyeongChang,
    Pretendard,
  } from "../../components/Text";

const Member = (props) =>{
    const task = props.task

    return(
        <MemberWrapper style={{display:"flex", marginTop:"16px"}}>
            <Name>{props.memberName}</Name>
            <div>
            <Dept>{props.dept}</Dept>
            <Task>{props.task}</Task>
            </div> 
        </MemberWrapper>
    )
}
export default Member;

const MemberWrapper = styled.div` 
     font-family: "Pretendard";
`
const Name = styled.div`
    width: 37px;
    color: var(--green3);
    font-size: 14px;
    font-weight: 700;
    margin-right: 40px;
`
const Dept = styled.div`
    color: var(--green1);
    font-weight: 300;
    font-size: 10px;
`
const Task = styled.div`
    width: 230px;
    white-space: pre-wrap;

    color: var(--green3);
    font-weight: 500;
    font-size: 12px;
`
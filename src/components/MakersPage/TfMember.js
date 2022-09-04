import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
//fonts
import {
    PyeongChang,
    Pretendard,
  } from "../Text";

const TfMember = (props) =>{

    return(
        <MemberWrapper style={{marginTop:"16px"}}>
            <Name>{props.memberName}</Name>
            <div>
            <Dept>{props.dept}</Dept>
            </div> 
        </MemberWrapper>
    )
}
export default TfMember;

const MemberWrapper = styled.div`
    width: 111px;
    height: 31px;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Pretendard';
`
const Name = styled.div`
    width: 37px;
    color: var(--green3);
    font-size: 14px;
    font-weight: 700;
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
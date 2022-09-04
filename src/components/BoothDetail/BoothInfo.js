import styled from "styled-components";
import PartTitle from "./PartTitle";
import back from "../../images/navbar/back.svg";
import React from "react";

const BoothInfo = props => {
  const infoString = props.infoString;
  return (
    <>
      <InfoWrapper>
        <div onClick={() => props.handleInfo()}>
          <PartTitle title="부스 소개" />
          <InfoUpDown>
            {props.info ? <Up src={back} /> : <Down src={back} />}
          </InfoUpDown>
        </div>
        <InfoTextContainer>
          {props.info ? (
            <LongInfo>
              {infoString &&
                (infoString.includes("\n") ? (
                  <>
                    {infoString.split("\n").map(line => {
                      return (
                        <span>
                          {line}
                          <br />
                        </span>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <span>{infoString}</span>
                  </>
                ))}
            </LongInfo>
          ) : (
            <ShortInfo>
              {infoString &&
                (infoString.includes("\n") ? (
                  <>
                    {infoString.split("\n").map(line => {
                      return (
                        <span>
                          {line}
                          <br />
                        </span>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <span>{infoString}</span>
                  </>
                ))}
            </ShortInfo>
          )}
        </InfoTextContainer>
      </InfoWrapper>
    </>
  );
};

export default BoothInfo;

const Up = styled.img`
  transform: rotate(90deg);
  width: 12px;
  height: 12px;
`;

const Down = styled.img`
  transform: rotate(270deg);
  width: 12px;
  height: 12px;
`;

const InfoWrapper = styled.div`
  position: relative;
`;

const InfoUpDown = styled.div`
  position: absolute;
  top: 35px;
  right: 30px;
  width: 12px;
  height: 12px;
`;

const InfoTextContainer = styled.div`
  width: calc(100% - 65px);
  min-height: 44px;
  margin: 0 auto;
  word-break: keep-all;
  overflow-x: hidden;
`;

const ShortInfo = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-weight: 300;
  color: var(--black);
  line-height: 160%;

  height: 44px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LongInfo = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-weight: 300;
  color: var(--black);
  line-height: 160%;
`;

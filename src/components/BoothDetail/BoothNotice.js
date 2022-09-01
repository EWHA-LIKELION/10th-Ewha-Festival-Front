import styled from "styled-components";
import { Pretendard } from "../Text";
import back from "../../images/navbar/back.svg";
import noticeicon from "../../images/detail/notice.svg";

const BoothNotice = props => {
  const noticeString = props.noticeString;
  return (
    <>
      <NoticeWrapper>
        <NoticeContainer
          onClick={() => props.handleNotice()}
          style={{ height: props.notice ? "auto" : "35px" }}
        >
          <Notice src={noticeicon} />
          <NoticeTextContainer>
            <Pretendard size="14px" weight="500" color="var(--black)">
              부스 공지사항
            </Pretendard>
            {props.notice ? (
              <div style={{ margin: "10px 0 10px 0", wordBreak: "keep-all" }}>
                <Pretendard
                  size="14px"
                  weight="300"
                  color="var(--black)"
                  style={{ lineHeight: "17px" }}
                >
                  {noticeString &&
                    (noticeString.includes("\n") ? (
                      <>
                        {noticeString.split("\n").map(line => {
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
                        <span>{noticeString}</span>
                      </>
                    ))}
                </Pretendard>
              </div>
            ) : null}
          </NoticeTextContainer>
          {props.notice ? (
            <Up
              src={back}
              style={{
                margin: "11px 0 0 5px",
              }}
            />
          ) : (
            <Down
              src={back}
              style={{
                margin: "11px 0 0 5px",
              }}
            />
          )}
        </NoticeContainer>
      </NoticeWrapper>
    </>
  );
};

export default BoothNotice;

const NoticeWrapper = styled.div`
  width: 100%;
  min-height: 50px;

  display: flex;
  justify-content: center;
`;

const NoticeContainer = styled.div`
  width: calc(100% - 40px);
  margin-top: 7.5px;
  display: flex;

  background-color: var(--gray0);
  border-radius: 10px;
`;

const Notice = styled.img`
  width: 16px;
  height: 16px;
  margin: 9px 7px 0 10px;
`;

const NoticeTextContainer = styled.div`
  margin-top: 9px;
  width: calc(100% - 60px);
  height: auto;
`;

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

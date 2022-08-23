import styled from "styled-components";
import { useState } from "react";

import { PyeongChang_Peace, Pretendard } from "../../components/Text";
import Footer from "../../components/Footer/Footer";
import PartTitle from "../../components/BoothDetail/PartTitle";
import { boothData } from "../../_mock/boothData";
import { boothMenu } from "../../_mock/boothMenu";
import { boothComment } from "../../_mock/boothComment";

import back from "../../images/navbar/back.svg";
import greenheart from "../../images/greenheart.svg";
import heart from "../../images/heart.svg";
import noticeicon from "../../images/notice.svg";

import { useEffect } from "react";

let id = 0;
const infostring =
  "큰돌고래가 큰 몸과 약간 짧고 다부진 부리를 가졌다면, 남방큰돌고래는 날씬한 몸과 긴 부리를 가지고 있다. 또한 남방큰돌고래는 큰돌고래와는 달리 배에 반점이 있는 경우도 있다. 겉으로 띠는 빛깔도 큰돌고래와 비교해서는 어쩌구 저쩌구 입니다요 그래서 저희 부스에서는~ 운영시간은~ 연락은~ 내용내용내용내용내용내용내용내용내용내용내용";

const BoothDetailPage = () => {
  const [booths, setBooths] = useState(boothData);
  const [menus, setMenus] = useState(boothMenu);
  const [comments, setComments] = useState(boothComment);

  const Like = id => {
    setBooths(
      booths.map(booth =>
        booth.id === id ? { ...booth, is_liked: true } : { ...booth },
      ),
    );
    console.log("좋아요", id);
    // 좋아요 요청 보내기
    // 업데이트
  };

  const unLike = id => {
    setBooths(
      booths.map(booth =>
        booth.id === id ? { ...booth, is_liked: false } : { ...booth },
      ),
    );
    console.log("좋아요 삭제", id);
    // 좋아요 삭제
    // 업데이트
  };

  const [notice, setNotice] = useState(false);
  const handleNotice = () => {
    setNotice(!notice);
  };

  const [info, setInfo] = useState(false);
  const handleInfo = () => {
    setInfo(!info);
  };

  useEffect(() => {
    setNotice(false);
    setInfo(false);
  }, []);

  return (
    <>
      <Wrapper>
        <Image />
        <BackBtn>
          <Back src={back} />
        </BackBtn>

        <TitleWrapper>
          <PyeongChang_Peace size="22px" weight="700" color="var(--green3)">
            부스 이름 이름
          </PyeongChang_Peace>
          {booths[id].is_liked ? (
            <Heart src={greenheart} onClick={() => unLike(1)} />
          ) : (
            <Heart src={heart} onClick={() => Like(1)} />
          )}
        </TitleWrapper>

        <NoticeWrapper>
          <NoticeContainer
            onClick={() => handleNotice()}
            style={{ height: notice ? "auto" : "35px" }}
          >
            <Notice src={noticeicon} />
            <NoticeTextContainer>
              <Pretendard size="14px" weight="500" color="var(--black)">
                부스 공지사항
              </Pretendard>
              {notice ? (
                <div style={{ margin: "10px 0 10px 0", wordBreak: "keep-all" }}>
                  <Pretendard
                    size="14px"
                    weight="300"
                    color="var(--black)"
                    style={{ lineHeight: "17px" }}
                  >
                    공지합니다. 저희 부스에서는 이러쿵 저러쿵 했습니다. 어쩌구
                    저쩌구 하실 분들은 아래 링크로 연락주세용가리. <br />
                    네네 감사합니다 많이 많이 와주세요. 멋사 최고~
                    가나다라마바사아
                  </Pretendard>
                </div>
              ) : null}
            </NoticeTextContainer>
            {notice ? (
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

        <InfoWrapper>
          <div onClick={() => handleInfo()}>
            <PartTitle title="부스 소개" />
            <InfoUpDown>
              {info ? <Up src={back} /> : <Down src={back} />}
            </InfoUpDown>
          </div>
          <InfoTextContainer>
            {info ? (
              <LongInfo>{infostring}</LongInfo>
            ) : (
              <ShortInfo>{infostring}</ShortInfo>
            )}
          </InfoTextContainer>
        </InfoWrapper>

        <MenuWrapper>
          <PartTitle title="메뉴" />
          {menus.map(menu => {
            let money = menu.price;
            let commaMoney = money
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return (
              <>
                {menu.is_soldout ? (
                  <>
                    <MenuContainer>
                      <MenuImage />
                      <MenuTextWrapper>
                        <Pretendard
                          size="14px"
                          weight="500"
                          color="var(--black)"
                          style={{ marginBottom: "5px", opacity: "0.4" }}
                        >
                          {menu.name}
                        </Pretendard>
                        <Pretendard
                          size="13px"
                          weight="300"
                          color="var(--black)"
                          style={{ opacity: "0.4" }}
                        >
                          {commaMoney}원
                        </Pretendard>
                      </MenuTextWrapper>
                      <Pretendard
                        size="12px"
                        weight="400"
                        color="var(--orange)"
                      >
                        sold out
                      </Pretendard>
                    </MenuContainer>
                  </>
                ) : (
                  <>
                    <MenuContainer>
                      <MenuImage />
                      <MenuTextWrapper>
                        <Pretendard
                          size="14px"
                          weight="500"
                          color="var(--black)"
                          style={{ marginBottom: "5px" }}
                        >
                          {menu.name}
                        </Pretendard>
                        <Pretendard
                          size="13px"
                          weight="300"
                          color="var(--black)"
                        >
                          {commaMoney}원
                        </Pretendard>
                      </MenuTextWrapper>
                    </MenuContainer>
                  </>
                )}
              </>
            );
          })}
        </MenuWrapper>

        <CommentsWrapper>
          <PartTitle title={"댓글 (" + comments.length + ")"} />
          {comments.map(comment => {
            let time = comment.created_at;
            let dotTime = time.toString();
            //let content = comment.content;
            //let brContent = content.replace(/(?:\r\n|\r|\n)/g, "<br />");
            return (
              <>
                <CommentContainer>
                  <div style={{ display: "flex", position: "relative" }}>
                    <Pretendard size="12px" weight="600" color="var(--green2)">
                      {comment.nickname}
                    </Pretendard>
                    <Pretendard
                      size="10px"
                      weight="300"
                      color="var(--gray2)"
                      style={{
                        left: "45px",
                        bottom: "0",
                        position: "absolute",
                      }}
                    >
                      {dotTime}
                    </Pretendard>
                  </div>
                  <Pretendard
                    size="14px"
                    weight="400"
                    color="var(--black)"
                    style={{ marginTop: "8px" }}
                  >
                    {comment.content}
                  </Pretendard>
                </CommentContainer>
              </>
            );
          })}
        </CommentsWrapper>

        <Footer />
      </Wrapper>
    </>
  );
};

export default BoothDetailPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 47px;
`;

const Image = styled.div`
  width: 100%;
  height: 250px;
  background-color: gray;
`;

const Back = styled.img`
  width: 10px;
  height: 17px;
  margin-right: 3px;
`;

const BackBtn = styled.div`
  width: 30px;
  height: 30px;
  background-color: var(--white);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  margin-top: 20px;
  margin-left: 20px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 65px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heart = styled.img`
  width: 20px;
`;

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
  word-break: keep-all;
  margin: 0 auto;
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

const MenuWrapper = styled.div`
  position: relative;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  margin: 0 auto;
  margin-bottom: 15px;
`;

const MenuImage = styled.div`
  width: 60px;
  width: 60px;
  height: 60px;
  background: #f7f7f7;
  border-radius: 10px;
  margin-right: 15px;
`;

const MenuTextWrapper = styled.div`
  width: calc(100% - 130px);
`;

const CommentsWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const CommentContainer = styled.div`
  width: calc(100% - 40px);
  min-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 15px;

  background-color: var(--gray0);
  border-radius: 10px;
`;

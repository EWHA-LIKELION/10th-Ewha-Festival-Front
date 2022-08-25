import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PyeongChang_Peace, Pretendard } from "../../components/Text";
import Footer from "../../components/Footer/Footer";
import PartTitle from "../../components/BoothDetail/PartTitle";
import BoothMenu from "../../components/BoothDetail/BoothMenu";
import BoothComments from "../../components/BoothDetail/BoothComments";
import { boothDetailData } from "../../_mock/boothDetailData";

import back from "../../images/navbar/back.svg";
import greenheart from "../../images/greenheart.svg";
import heart from "../../images/heart.svg";
import noticeicon from "../../images/detail/notice.svg";
import MenuImgModal from "../../components/BoothDetail/MenuImgModal";

const BoothDetailPage = () => {
  const id = 2;
  const index = id - 1;
  const [booths, setBooths] = useState(boothDetailData);
  const nav = useNavigate();

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

  const [imgModal, setImgModal] = useState(false);
  const closeModal = () => {
    setImgModal(false);
  };

  const [notice, setNotice] = useState(false);
  const handleNotice = () => {
    setNotice(!notice);
  };
  const noticeString = booths[index].notice;

  const [info, setInfo] = useState(false);
  const handleInfo = () => {
    setInfo(!info);
  };
  const infoString = booths[index].info;

  useEffect(() => {
    setImgModal(false);
    setNotice(false);
    setInfo(false);
  }, []);

  return (
    <>
      <Wrapper>
        <Image onClick={() => setImgModal(true)} />
        <BackBtn onClick={() => nav("/category")}>
          <Back src={back} />
        </BackBtn>

        <TitleWrapper>
          <PyeongChang_Peace size="22px" weight="700" color="var(--green3)">
            {booths[index].name}
          </PyeongChang_Peace>
          {booths[index].is_liked ? (
            <Heart src={greenheart} onClick={() => unLike(id)} />
          ) : (
            <Heart src={heart} onClick={() => Like(id)} />
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
                    {noticeString.split("\n").map(line => {
                      return (
                        <span>
                          {line}
                          <br />
                        </span>
                      );
                    })}
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
              <LongInfo>
                {infoString.split("\n").map(line => {
                  return (
                    <span>
                      {line}
                      <br />
                    </span>
                  );
                })}
              </LongInfo>
            ) : (
              <ShortInfo>
                {infoString.split("\n").map(line => {
                  return (
                    <span>
                      {line}
                      <br />
                    </span>
                  );
                })}
              </ShortInfo>
            )}
          </InfoTextContainer>
        </InfoWrapper>

        <BoothMenu thisId={id} />
        <BoothComments thisId={id} />

        <Footer />
      </Wrapper>
      {imgModal ? <MenuImgModal closeModal={closeModal} /> : null}
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

  cursor: pointer;
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

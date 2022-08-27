import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PyeongChang_Peace } from "../../components/Text";
import PartTitle from "../../components/BoothDetail/PartTitle";
import Footer from "../../components/Footer/Footer";
import BoothNotice from "../../components/BoothDetail/BoothNotice";
import BoothInfo from "../../components/BoothDetail/BoothInfo";
import BoothMenu from "../../components/BoothDetail/BoothMenu";
import BoothComments from "../../components/BoothDetail/BoothComments";
import ImgModal from "../../components/BoothDetail/ImgModal";

import { boothDetailData } from "../../_mock/boothDetailData";
import back from "../../images/navbar/back.svg";
import greenheart from "../../images/greenheart.svg";
import heart from "../../images/heart.svg";

const BoothDetailPage = () => {
  const id = 1;
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

  const [imgs, setImgs] = useState([]);
  const getImgs = () => {
    booths.map(booth => (booth.id === id ? setImgs(booth.img) : null));
    console.log(imgs);
  };
  useEffect(() => {
    getImgs();
  });
  const [src, setSrc] = useState("");
  const openModal = src => {
    setSrc(src);
    setImgModal(true);
  };

  useEffect(() => {
    setImgModal(false);
    setNotice(false);
    setInfo(false);
  }, []);

  return (
    <>
      <Wrapper>
        <MainImage onClick={() => openModal(booths[index].mainimg)}>
          <MainImg src={booths[index].mainimg} />
        </MainImage>
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
        <BoothNotice
          thisId={id}
          noticeString={noticeString}
          notice={notice}
          handleNotice={handleNotice}
        />
        <BoothInfo
          thisId={id}
          infoString={infoString}
          info={info}
          handleInfo={handleInfo}
        />
        <BoothMenu thisId={id} />
        <ImageWrapper>
          <PartTitle title="사진" />
          <ImageContainer>
            {imgs.map(img => {
              return (
                <>
                  <ImgRect onClick={() => openModal(img)}>
                    <Img src={img} />
                  </ImgRect>
                </>
              );
            })}
          </ImageContainer>
        </ImageWrapper>
        <BoothComments thisId={id} />
        <Footer />
      </Wrapper>
      {imgModal ? <ImgModal src={src} closeModal={closeModal} /> : null}
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

const MainImage = styled.div`
  width: 100%;
  height: 250px;
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
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

const ImageWrapper = styled.div`
  position: relative;
`;

const ImageContainer = styled.div`
  width: calc(100% - 40px);
  height: 140px;
  margin: 0 auto;

  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ImgRect = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  margin-right: 15px;
  overflow: hidden;
  flex-shrink: 0;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
`;

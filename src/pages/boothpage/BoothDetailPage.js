import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PyeongChang_Peace } from "../../components/Text";
import PartTitle from "../../components/BoothDetail/PartTitle";
import BoothNotice from "../../components/BoothDetail/BoothNotice";
import BoothInfo from "../../components/BoothDetail/BoothInfo";
import BoothMenu from "../../components/BoothDetail/BoothMenu";
import BoothComments from "../../components/BoothDetail/BoothComments";
import ImgModal from "../../components/BoothDetail/ImgModal";
import { GetBooth, LikeBooth, UnLikeBooth } from "../../api/booth";

import back from "../../images/navbar/back.svg";
import greenheart from "../../images/greenheart.svg";
import heart from "../../images/heart.svg";
import booththumnail from "../../images/detail/booththumnail.svg";

const BoothDetailPage = () => {
  let { id } = useParams();
  const [booth, setBooth] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    GetBooth(id)
      .then(res => {
        console.log("부스 상세 조회 성공", res);
        setBooth(res.data.data);
      })
      .catch(err => {
        console.log("부스 상세 조회 실패", err);
      });
  }, []);

  const Like = id => {
    const token = localStorage.getItem("token");
    if (token) {
      setBooth({ ...booth, is_liked: true });
      console.log("좋아요", id);
      LikeBooth(id)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.data));
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  const unLike = id => {
    setBooth({ ...booth, is_liked: false });
    console.log("좋아요 삭제", id);
    UnLikeBooth(id)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data));
  };

  const [imgModal, setImgModal] = useState(false);
  const closeModal = () => {
    setImgModal(false);
  };

  const [notice, setNotice] = useState(false);
  const handleNotice = () => {
    setNotice(!notice);
  };
  const [noticeString, setNoticeString] = useState("");

  const [info, setInfo] = useState(false);
  const handleInfo = () => {
    setInfo(!info);
  };
  const [infoString, setInfoString] = useState("");

  const [images, setImages] = useState([]);

  useEffect(() => {
    setNoticeString(booth.notice);
    setInfoString(booth.description);
    setImages(booth.images);
    console.log(
      "[부스]\n",
      booth,
      "\n\n[공지]\n",
      noticeString,
      "\n\n[소개]\n",
      infoString,
      "\n\n[이미지]\n",
      images,
    );
  }, [booth]);

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
        <MainImage
          onClick={() =>
            openModal(booth.thumnail === "" ? booththumnail : booth.thumnail)
          }
        >
          <MainImg
            src={booth.thumnail === "" ? booththumnail : booth.thumnail}
          />
        </MainImage>
        <BackBtn onClick={() => nav("/category")}>
          <Back src={back} />
        </BackBtn>
        <TitleWrapper>
          <PyeongChang_Peace size="22px" weight="700" color="var(--green3)">
            {booth.name}
          </PyeongChang_Peace>
          {booth.is_liked ? (
            <Heart src={greenheart} onClick={() => unLike(id)} />
          ) : (
            <Heart src={heart} onClick={() => Like(id)} />
          )}
        </TitleWrapper>
        <BoothNotice
          noticeString={noticeString}
          notice={notice}
          handleNotice={handleNotice}
        />
        <BoothInfo
          infoString={infoString}
          info={info}
          handleInfo={handleInfo}
        />
        <BoothMenu />
        {images &&
          (images.length === 0 ? (
            <ImageWrapper>
              <PartTitle title="사진" />
              <ImageContainer style={{ height: "15px" }}></ImageContainer>
            </ImageWrapper>
          ) : (
            <ImageWrapper>
              <PartTitle title="사진" />
              <ImageContainer>
                {images.map(img => {
                  return (
                    <>
                      <ImgRect onClick={() => openModal(img.image)}>
                        <Img src={img.image} />
                      </ImgRect>
                    </>
                  );
                })}
              </ImageContainer>
            </ImageWrapper>
          ))}
        <BoothComments />
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
  min-height: 65px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-right: 10px;
  }
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

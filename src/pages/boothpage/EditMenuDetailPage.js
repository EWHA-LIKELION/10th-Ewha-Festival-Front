import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

// import font
import { Pretendard } from "../../components/Text";

// import image
import emptysoldout from "../../images/edit/emptysoldout.svg";
import fullsoldout from "../../images/edit/fullsoldout.svg";

// import component
import Footer from "../../components/Footer/Footer";
import TitleBar from "../../components/TitleBar";

// import api component
import { GetMenu, PatchMenu } from "../../api/booth";
import { useAppSelector } from "../../redux/store";

const EditMenuDetailPage = () => {
  // navigate
  const navigate = useNavigate();

  // useParams로 menu id 받아오기
  const { id } = useParams();

  // useState
  const [isSoldout, setIsSoldout] = useState(false);
  const [menuName, setMenuName] = useState("");
  const [menuPrice, setMenuPrice] = useState("");
  const [menu, setMenu] = useState([]);

  // boothId 불러오기
  const boothId = useAppSelector(state => state.user.boothId);

  // 기존 메뉴 조회하기
  useEffect(() => {
    prevMenu();
  }, [menu]);

  // 기존 메뉴 조회 함수
  const prevMenu = () => {
    if (menu !== null) {
      setMenuName(menu.menu);
      setMenuPrice(menu.price);
      setIsSoldout(menu.is_soldout);
    }
  };

  // booth id, menu id에 따라 menu 불러오기
  useEffect(() => {
    if (boothId !== null) {
      GetMenu(boothId).then(response => {
        console.log(response.data.data.filter(isMenu)[0]);
        setMenu(response.data.data.filter(isMenu)[0]);
      });
    }
  }, [boothId]);

  // 필터링을 위한 boolean 함수
  const isMenu = element => {
    if (element.id == id) {
      return true;
    }
  };

  const onSubmit = () => {
    if (menuName !== "" && menuPrice !== "") {
      if (menuPrice >= 100000000) {
        alert("가격은 1억 이하로만 설정할 수 있습니다.");
      } else {
        PatchMenu(boothId, id, menuName, menuPrice, isSoldout)
          .then(response => console.log("[메뉴 정보 수정 성공]", response.data))
          .catch(error => {
            console.log(error);
          });

        navigate(-1);
      }
    } else {
      alert("메뉴 이름과 가격을 모두 입력해주세요");
    }
  };

  const onClickSoldOut = () => {
    setIsSoldout(!isSoldout);
  };

  const handleMenuName = e => {
    setMenuName(e.target.value);
  };

  const handleMenuPrice = e => {
    setMenuPrice(e.target.value);
  };

  return (
    <>
      <TitleBar>
        <span style={{ color: "var(--green1)" }}>메뉴 </span>
        <span style={{ color: "var(--green2)" }}>정보 </span>
        <span style={{ color: "var(--green3)" }}>수정</span>
      </TitleBar>
      <ContentWrapper>
        <BoxWrapper>
          <Pretendard weight="500" size="16px">
            <Title>메뉴 이름</Title>
          </Pretendard>
          <Input
            type="text"
            value={menuName || ""}
            onChange={handleMenuName}
            style={{ fontFamily: "Pretendard", height: "45px" }}
          />
        </BoxWrapper>
        <BoxWrapper>
          <Pretendard weight="500" size="16px">
            <Title>가격</Title>
          </Pretendard>
          <PriceWrapper>
            <InputPrice
              type="text"
              pattern="\d*"
              value={menuPrice || ""}
              onChange={handleMenuPrice}
              style={{ fontFamily: "Pretendard", height: "45px" }}
            />
            <Pretendard weight="500" size="16px">
              <div>원</div>
            </Pretendard>
            <Soldout>
              <Pretendard>
                <Text>sold out</Text>
              </Pretendard>
              {isSoldout ? (
                <Icon src={fullsoldout} onClick={onClickSoldOut} />
              ) : (
                <Icon src={emptysoldout} onClick={onClickSoldOut} />
              )}
            </Soldout>
          </PriceWrapper>
        </BoxWrapper>
        <ButtonWrapper>
          <Button className="Cancel" onClick={() => navigate(-1)}>
            취소
          </Button>
          <Button className="Approve" onClick={() => onSubmit()}>
            완료
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default EditMenuDetailPage;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 30px 210px 30px;
`;

const BoxWrapper = styled.div`
  border: none;
  width: 100%;
  padding: 12px 0 12px 0;
`;

const Title = styled.div`
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: var(--gray0);
  padding: 10px;
  font-size: 14px;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputPrice = styled.input`
  width: 57%;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: var(--gray0);
  padding: 10px;
  font-size: 14px;
  text-align: right;
`;

const Soldout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: var(--orange);
  font-weight: 600;
  margin-right: 6px;
`;

const Icon = styled.img`
  margin-left: 4px;
  width: 22px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 50px;

  .Cancel {
    font-family: "Pretendard";
    color: var(--green3);
  }

  .Approve {
    font-family: "Pretendard";
    color: var(--white);
    background: linear-gradient(90deg, #004628 0%, #107047 100%);
  }
`;

const Button = styled.button`
  width: 56px;
  height: 28px;
  border: none;
  border-radius: 6px;
  margin: 10px;
`;

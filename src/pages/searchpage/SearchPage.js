import styled, { css } from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
//컴포넌트
import { PyeongChang_Peace, Pretendard } from "../../components/Text";
import Footer from "../../components/Footer/Footer";
import { GetSearchBooth } from "../../api/booth";
// 데이터
import { locationData } from "../../_mock/locations";
import { dayData } from "../../_mock/dayData";
import { categoryData } from "../../_mock/categoryData";
import { boothMaps } from "../../_mock/boothMap";
// 이미지
import back from "../../images/navbar/back.svg";
import searchImg from "../../images/search/search.svg";
import greenheart from "../../images/greenheart.svg";
import heart from "../../images/heart.svg";

const SearchPage = () => {
  const [booths, setBooths] = useState(); // 부스 목록
  const [keyword, setkeyword] = useState("");
  const [search, setSearch] = useState(false);

  const navigate = useNavigate();

  const Detail = id => {
    navigate(`/category/detail/${id}`);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("검색 시도");

    if (keyword === "") {
      alert("검색어를 입력해주세요!");
    } else {
      GetSearchBooth("부스")
        .then(res => {
          console.log(res);
          setSearch(true);
          setBooths(res.data.data);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <Wrapper>
      <Navbar>
        <Back src={back} onClick={() => navigate("/category")} />

        <InputBox onSubmit={onSubmit}>
          <Input
            value={keyword}
            placeholder="부스 이름 또는 메뉴를 입력해주세요"
            onChange={e => setkeyword(e.target.value)}
          />
          <Search src={searchImg} onClick={onSubmit} />
        </InputBox>
      </Navbar>

      {search ? (
        <BoothBox>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Pretendard color="var(--gray3)" weight="500" size="12px">
              ‘{keyword}'에 대한 검색 결과
            </Pretendard>

            <Pretendard color="var(--gray3)" weight="500" size="12px">
              총 {booths.length}개의 부스
            </Pretendard>
          </div>

          {booths.map(b => {
            return (
              <Booth key={b.id} onClick={event => Detail(b.id)}>
                <BoothImg src={b.thumnail} />
                <BootInfo>
                  <p className="num">{b.number}</p>
                  <p className="name">{b.name}</p>
                  <p className="info">{b.description?.substr(0, 25)}</p>
                </BootInfo>

                {b.is_liked ? (
                  <Heart src={greenheart} />
                ) : (
                  <Heart src={heart} />
                )}
              </Booth>
            );
          })}
        </BoothBox>
      ) : (
        <div style={{ height: "538px" }}></div>
      )}

      <Footer />
    </Wrapper>
  );
};

export default SearchPage;

const Navbar = styled.div`
  display: flex;

  align-items: center;

  width: 100%;
  height: 76px;

  border-bottom: 1px solid var(--gray);
`;

const Back = styled.img`
  width: 10px;
  height: 17px;
  margin-left: 17px;
`;

const Search = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 17px;
`;

const InputBox = styled.form`
  margin-right: 20px;
  margin-left: 20px;

  width: 100%;
  height: 47px;
  background: #f9f9f9;

  border-radius: 8px;

  display: flex;
  align-items: center;

  justify-content: space-between;
`;

const Input = styled.input`
  margin-left: 16px;
  width: 100%;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  outline: none;
  border: none;
  background-color: transparent;
`;

const Heart = styled.img`
  position: absolute;
  top: 16px;
  right: 14px;
`;

const BoothImg = styled.img`
  background-color: #f6f6f6;
  margin-right: 12px;
  width: 89px;
  height: 90px;
  border-radius: 10px 0 0 10px;
  border: none;
`;

const BootInfo = styled.div`
  width: 176px;

  padding: 12px 0 12px 0;
  .num {
    font-size: 10px;
    font-style: "Pretendard-Regular";
    font-weight: 400;
    color: var(--orange);
  }

  .name {
    font-size: 15px;
    font-style: "Pretendard-Regular";
    font-weight: 700;
    color: var(--green3);
  }

  .info {
    letter-spacing: -2px;
    font-size: 11px;
    font-style: "Pretendard-Regular";
    font-weight: 400;
    line-height: 16px;
    color: var(--black);
  }
`;

const Booth = styled.div`
  margin-top: 16px;
  position: relative;
  display: flex;
  width: 335px;
  height: 90px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.075);
`;

const BoothBox = styled.div`
  margin: 0 auto 50px auto;
  min-height: 538px;
  width: 335px;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 26px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

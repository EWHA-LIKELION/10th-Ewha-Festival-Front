import styled from "styled-components";

import { PyeongChang_Peace, Pretendard } from "../../components/Text";
import LocationBtn from "../../components/Category/LocationBtn";
import Footer from "../../components/Footer/Footer";
import { locations } from "../../_mock/locations";

import back from "../../images/navbar/back.svg";
import search from "../../images/navbar/search.svg";
import map from "../../images/map.svg";
import greenheart from "../../images/greenheart.svg";
import heart from "../../images/heart.svg";
const Category = () => {
  const booths = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Wrapper>
      <Navbar>
        <Back src={back} />

        <PyeongChang_Peace
          size="22px"
          weight="700"
          color="var(--green3)"
          style={{ display: "flex" }}
        >
          <p style={{ color: "var(--green1)" }}>부</p>
          <p style={{ color: "var(--green2)" }}>스&nbsp;</p>
          카테고리
        </PyeongChang_Peace>
        <Search src={search} />
      </Navbar>

      <Map src={map} />

      <DayBox>
        <Day>
          <p className="date">14</p>
          <p className="day">수요일</p>
        </Day>
        <Day>
          <p className="date">15</p>
          <p className="day">목요일</p>
        </Day>
        <Day>
          <p className="date">16</p>
          <p className="day">금요일</p>
        </Day>
      </DayBox>

      <Hr />

      <LocationBox>
        <div style={{ display: "flex" }}>
          {locations.map(location => {
            if (location.isSelected) {
              return <LocationBtn selected>{location.name}</LocationBtn>;
            } else {
              return <LocationBtn>{location.name}</LocationBtn>;
            }
          })}
        </div>
      </LocationBox>

      <BoothBox>
        <Pretendard color="var(--gray3)" weight="500" size="12px">
          총 6개의 부스
        </Pretendard>

        {booths.map(() => {
          return (
            <Booth>
              <BoothImg />
              <BootInfo>
                <p className="num">포01</p>
                <p className="name">부스 이름</p>
                <p className="info">
                  달리기는 동물이 육상에서 다리를 이용해 움직이는 가장 빠른
                  방법을 말한다.
                </p>
              </BootInfo>
              <Heart src={greenheart} />
            </Booth>
          );
        })}
      </BoothBox>

      <Footer />
    </Wrapper>
  );
};

export default Category;

const Heart = styled.img`
  position: absolute;
  top: 16px;
  right: 14px;
`;

const BoothImg = styled.div`
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
  width: 335px;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 26px;
`;

const LocationBox = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 auto 0 auto;

  width: 345px;

  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Hr = styled.hr`
  z-index: -5;
  background-color: var(--gray);
  opacity: 0.5;
  width: 336px;
  margin: auto;
  transform: translate(0px, -13px);
`;

const DayBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 12px auto;

  width: 218px;
`;

const Day = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 51px;
  height: 45px;

  border-bottom: 1px solid var(--green3);

  .date {
    font-family: "Pretendard";
    font-weight: 300;
    font-size: 12px;
    color: var(--gray2);
  }

  .day {
    font-family: "Pretendard";
    font-weight: 700;
    font-size: 16px;
    color: var(--gray2);
    letter-spacing: -2px;

    width: 42px;
  }
`;

const Map = styled.img`
  margin: 8px 39px 23px 30px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 76px;

  border-bottom: 1px solid var(--gray);
`;

const Back = styled.img`
  width: 10px;
  height: 17px;
`;

const Search = styled.img`
  width: 17px;
  height: 17px;
`;

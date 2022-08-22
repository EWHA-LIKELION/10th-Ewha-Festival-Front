import styled, { css } from "styled-components";
import { useState } from "react";

import { PyeongChang_Peace, Pretendard } from "../../components/Text";
import LocationBtn from "../../components/Category/LocationBtn";
import Footer from "../../components/Footer/Footer";
import { GetKeywordBooth } from "../../api/booth";

import { locationData } from "../../_mock/locations";
import { dayData } from "../../_mock/dayData";
import { categoryData } from "../../_mock/categoryData";

import back from "../../images/navbar/back.svg";
import search from "../../images/navbar/search.svg";
import map from "../../images/map.svg";
import greenheart from "../../images/greenheart.svg";
import heart from "../../images/heart.svg";
import { useEffect } from "react";

const Category = () => {
  const [days, setDays] = useState(dayData); // 요일들
  const [locations, setLocations] = useState(locationData); // 장소들
  const [pickedDay, setPickedDay] = useState(); // 선택 된 요일
  const [pickedLocation, setPickedLocation] = useState(""); // 선택된 장소
  const [booths, setBooths] = useState(categoryData.data); // 부스 목록

  //날짜 또는 장소 선택 바뀌면 get api 실행
  useEffect(() => {
    GetKeywordBooth(pickedDay, pickedLocation)
      .then(res => {
        console.log("요일 장소 부스 조회 성공");
        setBooths(res.data);
      })
      .catch(err => console.log(err));
  }, [pickedDay, pickedLocation]);

  /**요일 선택 : 요일 버튼 ui 변경 + 선택된 요일 변경*/
  const selectDay = id => {
    setDays(
      days.map(day =>
        id === day.id
          ? { ...day, selected: true }
          : { ...day, selected: false },
      ),
    );

    // 선택된 날짜 바꾸기
    days.map(day => {
      if (id === day.id) {
        setPickedDay(id);
      }
    });
  };

  /** 장소 선택 : 장소 버튼 ui 변경 + 선택된 장소 변경 */
  const selectLocation = id => {
    setLocations(
      locations.map(loc =>
        id === loc.id
          ? { ...loc, selected: true }
          : { ...loc, selected: false },
      ),
    );

    // 선택된 장소 바꾸기
    locations.map(lo => {
      if (id === lo.id) {
        setPickedLocation(id);
      }
    });
  };

  /** 좋아요 클릭 : api 실행 -> 부스 목록 다시 get */
  const Like = id => {
    // 이 부분은 임시. api 구현 후 삭제
    setBooths(
      booths.map(booth =>
        booth.id === id ? { ...booth, is_liked: true } : { ...booth },
      ),
    );
    console.log("좋아요", id);
    // 좋아요 api 요청 보내기

    // 부스 목록 업데이트
  };

  /**좋아요 취소 : api 실행 -> 부스 목록 다시 get*/
  const unLike = id => {
    // 이 부분은 임시. api 구현 후 삭제
    setBooths(
      booths.map(booth =>
        booth.id === id ? { ...booth, is_liked: false } : { ...booth },
      ),
    );

    // 좋아요 삭제 api
    // 부스 목록 업데이트
  };

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
        {days.map(day => {
          if (day.selected) {
            return (
              <Day key={day.id} onClick={() => selectDay(day.id)} selected>
                <p className="date">{day.date}</p>
                <p className="day">{day.day}</p>
              </Day>
            );
          } else {
            return (
              <Day key={day.id} onClick={() => selectDay(day.id)}>
                <p className="date">{day.date}</p>
                <p className="day">{day.day}</p>
              </Day>
            );
          }
        })}
      </DayBox>

      <Hr />

      <LocationBox>
        <div style={{ display: "flex" }}>
          {locations.map(loc => {
            if (loc.selected === true) {
              return (
                <LocationBtn
                  key={loc.id}
                  onClick={() => selectLocation(loc.id)}
                  selected
                >
                  {loc.name}
                </LocationBtn>
              );
            } else {
              return (
                <LocationBtn
                  key={loc.id}
                  onClick={() => selectLocation(loc.id)}
                >
                  {loc.name}
                </LocationBtn>
              );
            }
          })}
        </div>
      </LocationBox>

      <BoothBox>
        <Pretendard color="var(--gray3)" weight="500" size="12px">
          총 6개의 부스
        </Pretendard>

        {booths.map(b => {
          return (
            <Booth key={b.id}>
              <BoothImg src={b.image} />
              <BootInfo>
                <p className="num">{b.number}</p>
                <p className="name">{b.name}</p>
                {/* <p className="info">{b.description}</p> */}
              </BootInfo>

              {b.is_liked ? (
                <Heart src={greenheart} onClick={() => unLike(b.id)} />
              ) : (
                <Heart src={heart} onClick={() => Like(b.id)} />
              )}
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

  ${props =>
    props.selected
      ? css`
          border-bottom: 1px solid var(--green3);

          .day {
            color: var(--green3);
          }
          .date {
            color: var(--green3);
          }
        `
      : css`
          border: none;
        `}
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

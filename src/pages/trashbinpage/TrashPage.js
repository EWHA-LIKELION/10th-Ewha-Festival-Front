import styled, { css } from "styled-components";
import { useState, useEffect } from "react";

import { PyeongChang_Peace, Pretendard } from "../../components/Text";

import Footer from "../../components/Footer/Footer";
import Map from "../../images/map.svg";
import TitleBar from "../../components/TitleBar";
import pinbtn from "../../images/trash/pinbtn.svg";

import { trashData } from "../../_mock/trashData";
import { trashPhoto } from "../../_mock/trashPhoto";

const TrashPage = () => {
  const [trashs, setTrashs] = useState(trashData);
  const [trashname,setTrashname]=useState("정문");
  const [trashinfo, setTrashinfo]=useState("정문 24번 부스 옆");
  const [pickedId, setId]=useState(0);

const selectPla=(id)=>{
  setTrashs(
    trashs.map(trash =>
      id === trash.id
        ? {...trash, selected:true}
        : {...trash, selected:false},
    ),
  );
setTrashname(trashData[id-1].name);
setTrashinfo(trashData[id-1].info);
setId(id);
}
  
  return (
    <>
      <TitleBar>
        <span style={{ color: "var(--green1)" }}>쓰레</span>
        <span style={{ color: "var(--green2)" }}>기통 </span>
        <span style={{ color: "var(--green3)" }}>지도</span>
      </TitleBar>
      <MainBox>
      <Tbox>
        <div>
          <PyeongChang_Peace>다시쓰는</PyeongChang_Peace>
        </div>
        <PyeongChang_Peace>
          이화의 <span>초록</span>
        </PyeongChang_Peace>
      </Tbox>
      <MapBox>
      <Mapimg>
      {trashs.map(trash => {
        if (trash.selected === true) {
        return (
          <Pin
            key={trash.id}
            top={trash.top}
            left={trash.left}
            src={pinbtn}
            onClick={() => selectPla(trash.id)}
            selected
          />
        );
      } else {
        return (
        <Pin
            key={trash.id}
            top={trash.top}
            left={trash.left}
            src={pinbtn}
            onClick={() => selectPla(trash.id)}
          />
          );
        }
      })}
      </Mapimg>
      </MapBox>
      <LocationBox>
        <LocationImg src={trashPhoto[pickedId-1]}/>
        <LocationInfo>
          <p className="name">{trashname}</p>
          <p className="info">{trashinfo}</p>
        </LocationInfo>
      </LocationBox>
      </MainBox>
      <Footer />
    </>
  );
};

export default TrashPage;

const MainBox=styled.div`display: flex;
flex-direction: column;
align-items: center;`;

const Tbox = styled.div`
  width: fit-content;
  margin: 32px auto 0;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  span {
    color: #007a28;
  }
  div {
    width: fit-content;
    margin: auto;
  }
`;
const MapBox=styled.div`
  position: relative;
  `;
const Mapimg = styled.div`
  width: 347px;
  height: 350px;
  background-image: url(${Map});
  background-repeat: no-repeat;
  background-size: 347px 350px;

  #mapimg {
    display: block;
  }
`;

const Pin = styled.img`
  position: absolute;
  width: fit-content;
  height: 24px;
  top: ${({ top }) => top+"px"};
  left: ${({ left }) => left};
  ${props =>
    props.selected
      ? css`
          top: ${({ top }) => top-25+"px"};
          left: ${({ left }) => left-25};
          height: 42px;
          animation-duration: 1s;
          animation-name: bounce;
          animation-iteration-count: infinite;
        `
      : css`
          
        `}
`;


const LocationBox = styled.div`
  margin: 29px auto 36px;
  width: 335px;
  height: 120px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.075);
  display: flex;
`;
const LocationImg = styled.img`
  background-color: #f6f6f6;
  margin-right: 14px;
  width: 120px;
  height: 120px;
  border-radius: 10px 0 0 10px;
  border: red;
`;

const LocationInfo = styled.div`
  width: 176px;
  padding: 30px 0 20px 0;
  .name {
    font-size: 15px;
    font-family: "Pretendard-Regular";
    font-weight: 700;
    color: var(--green3);
  }

  .info {
    font-size: 11px;
    font-family: "Pretendard-Regular";
    font-weight: 400;
    line-height: 16px;
    color: var(--black);
    margin-top: 15px;
  }
`;

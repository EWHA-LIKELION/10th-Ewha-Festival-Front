import React, { useState } from "react";
import styled from "styled-components";
import map from "../../images/map.svg";
import pin from "../../images/main/pin.svg";
import "../../styles/pin.css";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const [booth, setBooth] = useState([
    { id: 1, name: "정문", top: "215px", left: "170px" },
    { id: 2, name: "교육관", top: "95px", left: "120px" },
    { id: 3, name: "대강당", top: "185px", left: "120px" },
    { id: 4, name: "후윳길", top: "168px", left: "153px" },
    { id: 5, name: "포스코관", top: "112px", left: "143px" },
    { id: 6, name: "학문관", top: "133px", left: "113px" },
    { id: 7, name: "생활관", top: "163px", left: "88px" },
    { id: 8, name: "신세계관", top: "167px", left: "38px" },
  ]);

  const navigate = useNavigate();

  return (
    <Wrapper>
      <object type="image/svg+xml" data={map}>
        <CustomMap src={map} />
      </object>

      {booth.map(map => {
        return (
          <Pin
            key={map.id}
            top={map.top}
            left={map.left}
            src={pin}
            onClick={() => navigate("/category")}
          />
        );
      })}
    </Wrapper>
  );
};

export default Map;

const Wrapper = styled.div`
  margin-top: 10px;
  position: relative;
  width: 297px;
  height: 300px;
`;
const CustomMap = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 297px;
  height: 300px;
`;

const Pin = styled.img`
  position: absolute;
  width: 17px;
  height: 24px;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  animation-duration: 1s;
  animation-delay: 2s;
  animation-name: bounce;
  animation-iteration-count: infinite;
`;

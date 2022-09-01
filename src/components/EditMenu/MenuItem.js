import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Pretendard } from "../Text";
import emptycheck from "../../images/edit/emptycheck.svg";
import fullcheck from "../../images/edit/fullcheck.svg";
import axios from "axios";

const MenuData = ({ handleCheck, props, checked }) => {
  return (
    <>
      <Wrapper id={props.id} onClick={() => handleCheck}>
        <TextContainer id={props.id}>
          <Pretendard weight="500" size="14px">
            <MenuName id={props.id}>{props.menu}</MenuName>
          </Pretendard>
          <Pretendard weight="300" size="13px">
            <MenuPrice id={props.id}>{props.price}원</MenuPrice>
          </Pretendard>
        </TextContainer>
        {checked == props.id ? (
          <img src={fullcheck} id={props.id} />
        ) : (
          <img src={emptycheck} id={props.id} />
        )}
      </Wrapper>
    </>
  );
};

const MenuItem = props => {
  const [checked, setChecked] = useState(null);
  const [menus, setMenus] = useState([]);

  const id = 1;

  const handleCheck = e => {
    setChecked(e.target.id);
    props.setItem(e.target.id);
  };

  const getMenu = async () => {
    const response = await axios
      .get(`https://api.rewha2022.com/booths/${id}/menus/`)
      .then(response => {
        setMenus(response.data.data);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      {menus.map(props => (
        <>
          <div onClick={handleCheck}>
            <MenuData
              key={props.id}
              props={props}
              checked={checked}
              onClick={handleCheck}
              handleCheck={handleCheck}
            />
          </div>
        </>
      ))}
    </>
  );
};

export default MenuItem;

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 10px;
  padding: 30px;
`;

const Image = styled.div`
  width: 70px;
  height: 70px;
  border: none;
  background-color: #eaeaea;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

const MenuName = styled.div`
  margin-bottom: 2px;
  font-weight: 500;
`;

const MenuPrice = styled.span`
  font-size: 13px;
  font-weight: 300;
`;

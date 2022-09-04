import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Pretendard } from "../Text";
import emptycheck from "../../images/edit/emptycheck.svg";
import fullcheck from "../../images/edit/fullcheck.svg";
import axios from "axios";
import { GetMenu } from "../../api/booth";
import { useAppSelector } from "../../redux/store";
import { http } from "../../api/http";

const MenuData = ({ handleCheck, props, checked }) => {
  let price = props.price;
  if (props.is_soldout == true) {
  }
  let commaPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <>
      <Wrapper key={props.id} id={props.id} onClick={() => handleCheck}>
        <TextContainer
          key={props.id}
          id={props.id}
          className={props.is_soldout ? "soldout" : "selling"}
        >
          <Pretendard weight="500" size="14px">
            <MenuName key={props.id} id={props.id}>
              {props.menu}
            </MenuName>
          </Pretendard>
          <Pretendard weight="300" size="13px">
            <MenuPrice key={props.id} id={props.id}>
              {commaPrice}원
            </MenuPrice>
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
  const [id, setId] = useState(null);

  const handleCheck = e => {
    setChecked(e.target.id);
    props.setItem(e.target.id);
  };

  // user account 불러오기
  useEffect(() => {
    http
      .get("/accounts/")
      .then(response => {
        setId(response.data.data.booth_id);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (id !== null) {
      GetMenu(id).then(response => {
        setMenus(response.data.data);
      });
    }
  }, [id]);

  return (
    <>
      {menus.map(props => (
        <>
          <div key={props.id} onClick={handleCheck}>
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

  .soldout {
    color: var(--gray2);
  }
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

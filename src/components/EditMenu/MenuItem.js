import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Pretendard } from "../Text";
import emptycheck from "../../images/edit/emptycheck.svg";
import fullcheck from "../../images/edit/fullcheck.svg";

const MenuItem = props => {
  const MENU = [
    {
      id: "1",
      name: "첫번째 메뉴",
      price: "2,000원",
    },
    {
      id: "2",
      name: "두번째 메뉴",
      price: "3,000원",
    },
    {
      id: "3",
      name: "세번째 메뉴",
      price: "4,000원",
    },
  ];

  const [checked, setChecked] = useState(null);

  const handleCheck = e => {
    console.log(e.target.id);
    setChecked(e.target.id);
    props.setItem(e.target.id);
  };

  const onClickItem = useCallback(e => {
    const targetItem = e.target.id;
    // setItem(targetItem);
  }, []);

  return (
    <>
      {MENU.map(props => (
        <Wrapper
          id={props.id}
          type="radio"
          name="checkbox"
          onClick={handleCheck}
        >
          <Image />
          <TextContainer id={props.id}>
            <Pretendard weight="500" size="14px">
              <MenuName id={props.id}>{props.name}</MenuName>
            </Pretendard>
            <Pretendard weight="300" size="13px">
              <MenuPrice id={props.id}>{props.price}</MenuPrice>
            </Pretendard>
          </TextContainer>
          {checked === props.id ? (
            <img src={fullcheck} id={props.id} />
          ) : (
            <img src={emptycheck} id={props.id} />
          )}
        </Wrapper>
      ))}
    </>
  );
};

export default MenuItem;

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 90px;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 10px;

  input[type="radio"] {
    display: none;
  }
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
`;

const MenuName = styled.span``;

const MenuPrice = styled.span``;

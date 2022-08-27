import styled from "styled-components";
import { useState, useEffect } from "react";

import { Pretendard } from "../Text";
import PartTitle from "./PartTitle";
import { boothDetailData } from "../../_mock/boothDetailData";

const BoothMenu = props => {
  const id = props.thisId;
  const [booths, setBooths] = useState(boothDetailData);
  const [menus, setMenus] = useState([]);
  console.log(boothDetailData);

  const getMenu = () => {
    booths.map(booth => (booth.id === id ? setMenus(booth.menus) : null));
    console.log(menus);
  };

  useEffect(() => {
    getMenu();
  });

  return (
    <>
      <MenuWrapper>
        <PartTitle title="메뉴" />
        {menus.map(menu => {
          let money = menu.price;
          let commaMoney = money
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return (
            <>
              {menu.is_soldout ? (
                <>
                  <MenuContainer>
                    <MenuTextWrapper>
                      <Pretendard
                        size="14px"
                        weight="500"
                        color="var(--black)"
                        style={{ marginBottom: "5px", opacity: "0.4" }}
                      >
                        {menu.name}
                      </Pretendard>
                      {/*<Pretendard
                        size="13px"
                        weight="300"
                        color="var(--black)"
                        style={{ opacity: "0.4" }}
                      >
                        {commaMoney}원
                      </Pretendard>*/}
                      <Pretendard
                        size="13px"
                        weight="300"
                        color="var(--orange)"
                      >
                        sold out
                      </Pretendard>
                    </MenuTextWrapper>
                  </MenuContainer>
                </>
              ) : (
                <>
                  <MenuContainer>
                    <MenuTextWrapper>
                      <Pretendard
                        size="14px"
                        weight="500"
                        color="var(--black)"
                        style={{ marginBottom: "5px" }}
                      >
                        {menu.name}
                      </Pretendard>
                      <Pretendard size="13px" weight="300" color="var(--black)">
                        {commaMoney}원
                      </Pretendard>
                    </MenuTextWrapper>
                  </MenuContainer>
                </>
              )}
            </>
          );
        })}
      </MenuWrapper>
    </>
  );
};

export default BoothMenu;

const MenuWrapper = styled.div`
  position: relative;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 50px);
  margin: 0 auto;
`;

const MenuTextWrapper = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
`;

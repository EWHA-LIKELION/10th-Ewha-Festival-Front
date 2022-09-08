import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetBooth } from "../../api/booth";

import { Pretendard } from "../Text";
import PartTitle from "./PartTitle";

const BoothMenu = () => {
  let { id } = useParams();
  const [thisMenus, setThisMenus] = useState([]);

  useEffect(() => {
    GetBooth(id)
      .then(res => {
        setThisMenus(res.data.data.menus);
      })
      .catch(err => {
        alert("부스 상세 조회 실패", err);
      });
  }, []);

  return (
    <>
      <MenuWrapper>
        <PartTitle title="메뉴" />
        {thisMenus.map(menu => {
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
                        {menu.menu}
                      </Pretendard>
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
                        {menu.menu}
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

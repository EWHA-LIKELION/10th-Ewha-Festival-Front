import styled, { css } from "styled-components";
import { PyeongChang_Peace } from "../../components/Text";

import back from "../../images/navbar/back.svg";
import search from "../../images/navbar/search.svg";

const Navbar = () => {
  return (
    <NavbarBox>
      <Back src={back} />

      <PyeongChang_Peace
        size="22px"
        weight="700"
        color="var(--green3)"
        style={{ display: "flex" }}
      >
        <p style={{ color: "var(--green1)" }}>마</p>
        <p style={{ color: "var(--green2)" }}>이</p>
        페이지
      </PyeongChang_Peace>
      <Search src={search} />
    </NavbarBox>
  );
};
export default Navbar;

const NavbarBox = styled.div`
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
  opacity: 0;
`;

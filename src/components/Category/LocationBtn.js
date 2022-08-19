import styled, { css } from "styled-components";

const LocationBtn = ({ selected, children, onClick }) => {
  return (
    <Button onClick={onClick} selected={selected}>
      {children}
    </Button>
  );
};

export default LocationBtn;
const Button = styled.button`
  width: 58px;
  height: 25px;

  border-radius: 100px;
  margin: 0 6px 0 6px;
  text-align: center;
  align-items: center;

  font-family: "Pretendard";
  font-weight: 400;
  font-size: 14px;

  ${props =>
    props.selected
      ? css`
          background-color: var(--green3);
          color: white;
          border: none;
        `
      : css`
          background-color: white;
          border: 1px solid var(--green3);
          color: var(--green3);
        `}
`;

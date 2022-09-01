import React from "react";
import styled from "styled-components";
const UploadButton = ({ children, onClick, margin }) => {
  return (
    <Button onClick={onClick} margin={margin}>
      {children}
    </Button>
  );
};

export default UploadButton;

const Button = styled.button`
  color: var(--white);
  font-family: var(--pre-font);
  font-size: 14px;

  padding: 5px 12px;
  width: 60px;
  height: 28px;

  border: none;
  border-radius: 10px;

  align-items: center;
  text-align: center;
  background: linear-gradient(
    to right,
    rgba(0, 70, 40, 1),
    rgba(16, 112, 71, 1)
  );
`;

import React from "react";
import styled from "styled-components";
const DeleteButton = ({ children, onClick, margin }) => {
  return (
    <Button onClick={onClick} margin={margin}>
      {children}
    </Button>
  );
};

export default DeleteButton;

const Button = styled.button`
  margin-right: 3%;
  box-sizing: border-box;
  margin-left: auto;
  color: var(--green3);
  font-family: "Pretendard";
  font-size: 14px;
  padding: 10px 22px;
  width: 56px;
  height: 28px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  background: var(--gray);
`;

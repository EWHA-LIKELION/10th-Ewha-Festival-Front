import React from "react";
import styled from "styled-components";
const GrayButton = ({ children, onClick, margin }) => {
  return (
    <Button onClick={onClick} margin={margin}>
      {children}
    </Button>
  );
};

export default GrayButton;

const Button = styled.button`
  margin: ${({ margin }) => margin};

  color: var(--green3);
  font-family: var(--green2);
  font-size: 14px;
  width: 60px;
  height: 28px;

  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--gray);
`;

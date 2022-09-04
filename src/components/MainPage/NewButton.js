import React from "react";
import styled from "styled-components";
const NewButton = ({ children, onClick, margin }) => {
  return (
    <Button className="new-button" onClick={onClick} margin={margin}>
      {children}
    </Button>
  );
};

export default NewButton;

const Button = styled.button`
position: relative;
overflow: hidden;

  margin: ${({ margin }) => margin};

  color: var(--white);
  text-decoration-line: none;
  font-family: var(--pre-font);
  font-size: 14px;

  padding: 10px 22px;
  height: 37px;

  border: none;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(
    to right,
    rgba(0, 70, 40, 1),
    rgba(16, 112, 71, 1)
  );
`;


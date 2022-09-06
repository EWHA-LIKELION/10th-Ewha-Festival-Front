import React from "react";
import styled from "styled-components";
import axios from 'axios';

const UploadButton = ({ children, onClick, margin }) => {
  return (
    <Button onClick={onClick} margin={margin}>
        {children}
    </Button>
  );
};

export default UploadButton;

const Button = styled.button`
  margin-right: 7%;
  color: var(--white);
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
  background: linear-gradient(
    to right,
    rgba(0, 70, 40, 1),
    rgba(16, 112, 71, 1)
  );
`;
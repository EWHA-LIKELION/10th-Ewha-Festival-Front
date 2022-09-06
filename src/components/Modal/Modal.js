import React, { useEffect } from "react";
import styled from "styled-components";
import { Pretendard } from "../../components/Text";
import GrayButton from "../Modal/GrayButton";
import GreenButton from "../Modal/GreenButton";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

const Modal = props => {
  const { isOne, open, close, header, subtext, maintext, onClick } = props;
  const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    };
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed;
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <header>
              <Pretendard size="16px" weight="700" color="var(--white)">
                {header}
              </Pretendard>
            </header>
            {isOne ? (
              <>
                <main>
                  <Pretendard
                    size="15px"
                    weight="500"
                    color="var(--black)"
                    style={{ marginTop: "12px" }}
                  >
                    {maintext}
                  </Pretendard>
                </main>
                <footer>
                  <Upload>
                    <GreenButton onClick={onClick}>
                      <Pretendard size="14px" weight="500" color="var(--white)">
                        확인
                      </Pretendard>
                    </GreenButton>
                  </Upload>
                </footer>
              </>
            ) : (
              <>
                <main>
                  <Pretendard
                    size="10px"
                    weight="400"
                    color="#928D8D"
                    style={{ marginTop: "5px" }}
                  >
                    {subtext}
                  </Pretendard>
                  <Pretendard
                    size="15px"
                    weight="500"
                    color="var(--black)"
                    style={{ marginTop: "12px" }}
                  >
                    {maintext}
                  </Pretendard>
                </main>
                <footer>
                  <Cancel>
                    <GrayButton onClick={close}>
                      <Pretendard
                        size="14px"
                        weight="500"
                        color="var(--green3)"
                      >
                        취소
                      </Pretendard>
                    </GrayButton>
                  </Cancel>
                  <Upload>
                    <GreenButton onClick={handleBackButton}>
                      <Pretendard size="14px" weight="500" color="var(--white)">
                        확인
                      </Pretendard>
                    </GreenButton>
                  </Upload>
                </footer>
              </>
            )}
          </section>
        ) : null}
      </div>
    </>
  );
};

export default Modal;

const Cancel = styled.button`
  margin: 0 5px 15px 5px;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const Upload = styled.button`
  margin: 0 5px 15px 5px;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

import React from "react";
import styled from "styled-components";
import { Pretendard } from "../Text";
import GrayButton from "../Modal/GrayButton";
import GreenButton from "../Modal/GreenButton";
import "../Modal/Modal.css";
import { DeleteComment } from "../../api/booth";

const Modal = props => {
  const { open, close, id, cId, header } = props;
  const Delete = cId => {
    console.log(cId, "댓글 삭제");
    DeleteComment(id, cId)
      .then(res => {
        console.log(res.data);
        props.getComments();
      })
      .catch(err => console.log(err.data));
    close();
  };

  return (
    <>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section style={{ width: "80%" }}>
            <header>
              <Pretendard size="16px" weight="700" color="var(--white)">
                {header}
              </Pretendard>
            </header>
            <main>
              <Pretendard
                size="10px"
                weight="400"
                color="#928D8D"
                style={{ marginTop: "5px" }}
              >
                삭제된 댓글은 다시 불러올 수 없습니다.
              </Pretendard>
              <Pretendard
                size="14px"
                weight="00"
                color="#000000"
                style={{ marginTop: "10px" }}
              >
                댓글을 삭제하시겠습니까?
              </Pretendard>
            </main>
            <footer style={{ display: "flex", justifyContent: "center" }}>
              <Cancel>
                <GrayButton onClick={close}>
                  <Pretendard size="14px" weight="500" color="var(--green3)">
                    취소
                  </Pretendard>
                </GrayButton>
              </Cancel>
              <Upload>
                <GreenButton onClick={() => Delete(props.cId)}>
                  <Pretendard size="14px" weight="500" color="var(--white)">
                    확인
                  </Pretendard>
                </GreenButton>
              </Upload>
            </footer>
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

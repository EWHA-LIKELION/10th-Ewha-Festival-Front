import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetBooth } from "../../api/booth";

import { Pretendard } from "../Text";
import PartTitle from "./PartTitle";
import DeleteModal from "../../components/BoothDetail/DeleteModal.js";
import commentdelete from "../../images/detail/commentdelete.svg";
import commentwrite from "../../images/detail/commentwrite.svg";

const BoothComments = () => {
  let { id } = useParams();
  const [thisComments, setThisComments] = useState([]);

  useEffect(() => {
    GetBooth(id)
      .then(res => {
        console.log("부스 상세 조회 성공", res);
        console.log(res.data.data.comments);
        setThisComments(res.data.data.comments);
      })
      .catch(err => {
        console.log("부스 상세 조회 실패", err);
      });
  }, []);

  const [deleteModal, setDeleteModal] = useState(false);
  const openDeleteModal = () => {
    setDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    setDeleteModal(false);
  }, []);

  const DeleteComment = cId => {
    openDeleteModal();
    setCurrentId(cId);
  };

  const [newComment, setNewComment] = useState("");

  const SubmitComment = e => {
    e.preventDefault();
    console.log("댓글 작성", newComment);
    //api
    setNewComment("");
  };

  return (
    <>
      <CommentsWrapper>
        <PartTitle title={"댓글 (" + thisComments.length + ")"} />
        {thisComments.map(comment => {
          let time = comment.created_at;
          let dotTime = time.toString();
          return (
            <>
              <CommentContainer>
                <div style={{ display: "flex", position: "relative" }}>
                  <Pretendard
                    size="12px"
                    weight="600"
                    color={comment.isTF ? "var(--orange)" : "var(--green2)"}
                  >
                    {comment.user}
                  </Pretendard>
                  <Pretendard
                    size="10px"
                    weight="300"
                    color="var(--gray2)"
                    style={{
                      marginLeft: "7px",
                      marginTop: "2px",
                    }}
                  >
                    {dotTime}
                  </Pretendard>
                  <Delete
                    src={commentdelete}
                    onClick={() => DeleteComment(comment.id)}
                  />
                </div>
                <Pretendard
                  size="14px"
                  weight="400"
                  color="var(--black)"
                  style={{ marginTop: "8px" }}
                >
                  {comment.content.split("\n").map(line => {
                    return (
                      <span>
                        {line}
                        <br />
                      </span>
                    );
                  })}
                </Pretendard>
              </CommentContainer>
            </>
          );
        })}
      </CommentsWrapper>
      <CommentInputWrapper>
        <CommentInputContainer onSubmit={SubmitComment}>
          <CommentInput
            placeholder="댓글을 입력하세요"
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
          />
          <WriteBtn type="submit">
            <Write src={commentwrite} />
          </WriteBtn>
        </CommentInputContainer>
      </CommentInputWrapper>
      {deleteModal ? (
        <DeleteModal
          open={deleteModal}
          close={closeDeleteModal}
          id={currentId}
          header="댓글 삭제"
        />
      ) : null}
    </>
  );
};

export default BoothComments;

const CommentsWrapper = styled.div`
  position: relative;
  margin-bottom: 70px;
`;

const CommentContainer = styled.div`
  width: calc(100% - 40px);
  min-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 15px;

  background-color: var(--gray0);
  border-radius: 10px;
`;

const Delete = styled.img`
  position: absolute;
  right: 5px;
  width: 8px;
  height: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const CommentInputWrapper = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 25px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid var(--gray);
`;

const CommentInputContainer = styled.form`
  width: calc(100% - 40px);
  height: 40px;
  margin: 0 auto;
  background-color: var(--gray0);
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: relative;
`;

const CommentInput = styled.input`
  margin-left: 15px;
  width: calc(100% - 50px);
  height: 30px;
  background-color: transparent;
  border: 0;
  &:focus {
    outline: none;
  }

  font-family: "Pretendard-Regular";
  font-weight: 300;
  font-size: 14px;
`;

const WriteBtn = styled.button`
  width: 14px;
  height: 13.5px;
  position: absolute;
  right: 15px;
  background-color: transparent;
  border: 0;
`;

const Write = styled.img`
  width: 14px;
  height: 13.5px;
`;

import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { GetBooth } from "../../api/booth";
import { SubmitComment } from "../../api/booth";
import { useAppDispatch } from "../../redux/store";
import { http } from "../../api/http";
import { DeleteCommentA } from "../../api/booth";

import { Pretendard } from "../Text";
import PartTitle from "./PartTitle";
import Modal from "../Modal/Modal";
import commentdelete from "../../images/detail/commentdelete.svg";
import commentwrite from "../../images/detail/commentwrite.svg";

const BoothComments = () => {
  let { id } = useParams();
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token === null) {
      setIsLogin(false);
    }
    if (token !== null) {
      setIsLogin(true);
    }
  }, []);
  useEffect(() => {
    console.log("로그인? ", isLogin);
  }, [isLogin]);
  useEffect(() => {
    if (isLogin === true) {
      document.getElementById("input").disabled = false;
    }
    if (isLogin === false) {
      document.getElementById("input").disabled = true;
    }
  });

  const [thisUser, setThisUser] = useState({});
  const dispatch = useAppDispatch();
  const [thisBoothUserId, setThisBoothUserId] = useState();
  const [thisComments, setThisComments] = useState([]);
  const getComments = () => {
    GetBooth(id)
      .then(res => {
        console.log("부스 상세 조회 성공", res);
        console.log("[부스 관리자 ID] ", res.data.data.user);
        setThisBoothUserId(res.data.data.user);
        console.log("[댓글]\n", res.data.data.comments);
        setThisComments(res.data.data.comments);
      })
      .catch(err => {
        console.log("부스 상세 조회 실패", err);
      });
  };

  useEffect(() => {
    getComments();
    http
      .get("/accounts/")
      .then(res => {
        console.log(res.data);
        console.log("[로그인 유저]\n", res.data.data);
        dispatch(setThisUser(res.data.data));
      })
      .catch(err => console.log(err));
  }, []);

  const detBooth = cUserId => {
    if (thisBoothUserId === cUserId) {
      return true;
    } else {
      return false;
    }
  };

  const [deleteModal, setDeleteModal] = useState(false);
  const openDeleteModal = () => {
    setDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const [currentId, setCurrentId] = useState("");

  const PreDeleteComment = cId => {
    openDeleteModal();
    setCurrentId(cId);
  };

  const DeleteComment = cId => {
    console.log(cId, "댓글 삭제");
    DeleteCommentA(id, cId)
      .then(res => {
        console.log(res.data);
        getComments();
      })
      .catch(err => console.log(err.data));
    closeDeleteModal();
  };

  const [newComment, setNewComment] = useState("");
  const [inputModal, setInputModal] = useState(false);
  const openInputModal = () => {
    setInputModal(true);
  };
  const closeInputModal = () => {
    setInputModal(false);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (newComment === "") {
      setInputModal(true);
    } else {
      console.log("댓글 작성", newComment);
      SubmitComment(id, newComment)
        .then(res => {
          console.log(res.data);
          getComments();
        })
        .catch(err => console.log(err.data));
      setIsAdd(true);
      setNewComment("");
    }
  };

  useEffect(() => {
    setDeleteModal(false);
    setInputModal(false);
  }, []);

  const endRef = useRef(null);
  const scrollToBottom = () => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [isAdd, setIsAdd] = useState(false);
  useEffect(() => {
    if (isAdd == true) {
      scrollToBottom();
      setIsAdd(false);
    } else {
      setIsAdd(false);
    }
  }, [thisComments]);

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
                    color={
                      detBooth(comment.user.id)
                        ? "var(--orange)"
                        : "var(--green2)"
                    }
                  >
                    {comment.user.nickname}
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
                  {comment.user.id === thisUser.id ? (
                    <Delete
                      src={commentdelete}
                      onClick={() => PreDeleteComment(comment.id)}
                    />
                  ) : null}
                </div>
                <Pretendard
                  size="14px"
                  weight="400"
                  color="var(--black)"
                  style={{ marginTop: "8px" }}
                >
                  {comment.content}
                </Pretendard>
              </CommentContainer>
            </>
          );
        })}
      </CommentsWrapper>
      <Bottom />
      <div ref={endRef} />
      <CommentInputWrapper>
        <CommentInputContainer>
          <CommentInput
            placeholder={
              isLogin ? "댓글을 입력하세요" : "로그인 후 댓글을 입력해보세요"
            }
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            autoComplete="off"
            id="input"
          />
          {isLogin ? (
            <WriteBtn onClick={e => onSubmit(e)}>
              <Write src={commentwrite} />
            </WriteBtn>
          ) : null}
        </CommentInputContainer>
      </CommentInputWrapper>
      {inputModal ? (
        <Modal
          isOne={true}
          open={openInputModal}
          close={closeInputModal}
          header="댓글 내용 없음"
          subtext="-"
          maintext="댓글 내용을 입력해주세요."
          onClick={() => closeInputModal()}
        />
      ) : null}
      {deleteModal ? (
        <Modal
          isOne={false}
          open={deleteModal}
          close={closeDeleteModal}
          header="댓글 삭제"
          subtext="삭제된 댓글은 되돌릴 수 없습니다."
          maintext="댓글을 삭제하시겠습니까?"
          onClick={() => DeleteComment(currentId)}
        />
      ) : null}
    </>
  );
};

export default BoothComments;

const Bottom = styled.div`
  width: 100%;
  height: 70px;
`;

const CommentsWrapper = styled.div`
  position: relative;
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
  height: 70px;
  margin-top: 25px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid var(--gray);
`;

const CommentInputContainer = styled.div`
  width: calc(100% - 40px);
  height: 35px;
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

  font-family: "Pretendard";
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

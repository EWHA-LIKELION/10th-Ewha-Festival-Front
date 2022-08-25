import styled from "styled-components";
import { useState, useEffect } from "react";

import { PyeongChang_Peace, Pretendard } from "../Text";
import PartTitle from "./PartTitle";
import { boothDetailData } from "../../_mock/boothDetailData";

const BoothComments = props => {
  const id = props.thisId;
  const [booths, setBooths] = useState(boothDetailData);
  const [comments, setComments] = useState([]);
  console.log(boothDetailData);

  const getComment = () => {
    booths.map(booth => (booth.id === id ? setComments(booth.comments) : null));
    console.log(comments);
  };

  useEffect(() => {
    getComment();
  });

  return (
    <>
      <CommentsWrapper>
        <PartTitle title={"댓글 (" + comments.length + ")"} />
        {comments.map(comment => {
          let time = comment.created_at;
          let dotTime = time.toString();
          return (
            <>
              <CommentContainer>
                <div style={{ display: "flex", position: "relative" }}>
                  <Pretendard size="12px" weight="600" color="var(--green2)">
                    {comment.nickname}
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
    </>
  );
};

export default BoothComments;

const CommentsWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
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

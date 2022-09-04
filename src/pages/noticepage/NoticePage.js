import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GetAllNotice } from "../../api/tf";
import { useAppSelector } from "../../redux/store";

//_mock 더미데이터
import { noticeData } from "../../_mock/noticeData";

// components
import TitleBar from "../../components/TitleBar";
import Footer from "../../components/Footer/Footer";
import Pagination from "../../components/NoticePage/Pagination";
import { PyeongChang } from "../../components/Text";

// image
import star3 from "../../images/stars/star3.svg";
import write from "../../images/write.svg";

export function NoticePage() {
const [notices, setNotices] = useState([]);

// 공지 조회 api 
useEffect(()=>{
  GetAllNotice()
  .then(res =>{
    console.log("모든 공지 조회 성공", res.data.data);
    setNotices(res.data.data);
    console.log(isTf)
  })
  .catch(err => {
      console.log("모든 공지 조회 실패")
    })
},[])

// 유저 tf 여부
const isTf = useAppSelector(state => state.user.isTf)

// 공지 작성 페이지 이동
function Write(e) {
  window.location.href = "/create";
}

// 페이지네이션
const [limit, setLimit] = useState(5);
const [page, setPage] = useState(1);
const offset = (page - 1) * limit;

  return (
    <>
      <TitleBar> 
        <span style={{ color: "var(--green1)" }}>공</span>
        <span style={{ color: "var(--green2)" }}>지</span>
        <span style={{ color: "var(--green3)" }}>사항</span>
      </TitleBar>
      <SubTitleBox>
        <SubTitle>
          <img src={star3} />
          <PyeongChang
            color="var(--orange)"
            weight="700"
            size="15px"
            style={{ margin: "4px 8px" }}
          >
            NOTICE
          </PyeongChang>
          <img src={star3} />
        </SubTitle>
        {isTf ? <NoticeWrite onClick={Write}>
          <p>공지 작성하기 </p>
          <img src={write} />
        </NoticeWrite>
        : null}
      </SubTitleBox>
      <Line />
      <div>
      {notices && notices.slice(offset, offset + limit).map(notice => {
        return (
          <>
            <Link
              to={`/notice/${notice.id}`}
              state={{ notice: notice }}
              style={{ textDecoration: "none" }}
            >
              <NoticeBox key={notice.id}>
              <p class="title">{"[공지]" + " " + notice.title}</p>
                <NoticeInfo>
                  <p class="writer">TF 팀</p>
                  <p class="createdAt">{notice.created_at}</p>
                </NoticeInfo>
              </NoticeBox>
            </Link>
            <Line />
          </>
        );
      })}
      </div>
      <Pagination
        total={notices.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
      <Footer />
    </>
  );
}
const SubTitleBox = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 45px;
`;

const SubTitle = styled.div`
  display: flex;
  width: 103px;
  box-sizing: border-box;
  margin: 20px auto 0px;
`;
const NoticeWrite = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  margin: 0 8% 0;
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin-right: 2px;
    color: var(--green2);
  }
`;

const Line = styled.hr`
  border: 1px solid var(--gray);
  width: 85%;
  margin: 0 auto;
`;

const NoticeBox = styled.div`
  width: 80%;
  box-sizing: border-box;
  margin: 5% auto;
  .title {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: var(--black);
  }
`;
const NoticeInfo = styled.div`
  display: flex;
  color: var(--gray2);
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    margin-right: 3%;
  }
`;

export default NoticePage;
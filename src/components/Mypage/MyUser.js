import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { PyeongChang_Peace, Pretendard } from "../Text";
import Footer from "../Footer/Footer";
import { boothData } from "../../_mock/boothData";
import { http } from "../../api/http";
import Mstar from "../../images/mypage/Mstar.svg";

import Logout from "./Logout";
import Navbar from "./Navbar";

import greenheart from "../../images/greenheart.svg";
import likebooth from "../../images/mypage/likebooth.svg";
import userbg from "../../images/mypage/userbg.svg";

import { GetLikes } from "../../api/user";

const UserMy = () => {
  const [booths, setBooths] = useState();
  const [likebooths, setLikebooths] = useState(0);
  const [nickname, setnickname] = useState();
  const [username, setusername] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    http
      .get("/accounts/")
      .then(res => {
        console.log("[로그인 유저]\n", res.data.data);
        setnickname(res.data.data.nickname);
        setusername(res.data.data.username);
      })
      .catch(err => console.log(err));
  }, []);

  const Detail = id => {
    console.log("페이지 이동");
    navigate(`/category/detail/${id}`);
  };
  useEffect(() => {
    GetLikes(localStorage.getItem("token").slice(1, -1))
      .then(res => {
        console.log("좋아요한 부스 조회 성공", res);
        setBooths(res.data.data);
        setLikebooths(res.data.data.length);
      })
      .catch(err => {
        console.log("좋아요한 부스 조회 실패", err);
      });
  }, []);
  const wrapperRef = useRef(null);

  return (
    <Wrapper>
      <Navbar />
      <Userbox>
        <object className="Mstar" data={Mstar} type="image/svg+xml" />
        <p className="nickname">
          <Pretendard>{nickname}</Pretendard>
        </p>
        <p className="user">
          <Pretendard>{username}</Pretendard>
        </p>
        <object className="star" data={likebooth} type="image/svg+xml" />
      </Userbox>
      <BoothBox>
        <Titlebox>
          <object data={likebooth} type="image/svg+xml" />
          <PyeongChang_Peace
            color="var(--green3)"
            weight="300"
            size="16px"
            style={{ display: "flex" }}
          >
            좋아요한 부스 ({likebooths})
          </PyeongChang_Peace>
        </Titlebox>
        {booths?.map(b => {
          const description = b.description?.substr(0, 27);
          if (description?.includes("\n")) {
            var info = description.split("\n")[0];
          } else {
            var info = description;
          }

          return (
            <Booth key={b.id} onClick={event => Detail(b.id)}>
              <LikeImg src={b.thumnail} />
              <BootInfo>
                <p className="num">{b.number}</p>
                <p className="name">{b.name.substr(0, 13)}</p>
                <p className="info">{info}</p>
              </BootInfo>
              <Heart
                src={greenheart}
                onClick={() => unLike(b.id)}
                ref={wrapperRef}
              />
            </Booth>
          );
        })}
      </BoothBox>
      <Logout />
      <Footer />
    </Wrapper>
  );
};

export default UserMy;

const Heart = styled.img`
  position: absolute;
  top: 16px;
  right: 14px;
`;

const LikeImg = styled.img`
  background-color: #f6f6f6;
  margin-right: 12px;
  width: 89px;
  height: 90px;
  border-radius: 10px 0 0 10px;
  border: none;
`;

const BootInfo = styled.div`
  width: 176px;
  padding: 12px 0 12px 0;
  .num {
    font-size: 10px;
    font-style: "Pretendard-Regular";
    font-weight: 400;
    color: var(--orange);
  }
  .name {
    font-size: 15px;
    font-style: "Pretendard-Regular";
    font-weight: 700;
    color: var(--green3);
  }
  .info {
    font-size: 11px;
    font-style: "Pretendard-Regular";
    font-weight: 400;
    line-height: 16px;
    color: var(--black);
  }
`;

const Booth = styled.div`
  margin-top: 16px;
  position: relative;
  display: flex;
  width: 335px;
  height: 90px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.075);
`;

const BoothBox = styled.div`
  margin: 0 auto 50px auto;
  width: 335px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 26px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Titlebox = styled.div`
  border-bottom: 1px solid var(--gray);
  display: flex;
  object {
    width: 17px;
    height: 28px;
    margin-bottom: 7px;
    margin-right: 7px;
    display: block;
  }
`;

const Userbox = styled.div`
  background-image: url(${userbg});
  background-repeat: no-repeat;
  width: 268px;
  height: 105px;
  margin: 33px auto;
  text-align: center;
  position: relative;
  .star {
    position: absolute;
    top: 55px;
    left: 250px;
  }
  .Mstar {
    position: absolute;
    top: 8px;
    left: 6px;
  }
  .nickname {
    margin: 23px auto 2px;
    color: #686868;
    font-weight: 700;
    font-size: 30px;
    width: fit-content;
  }
  .user {
    font-weight: 500;
    font-size: 14px;
    color: var(--green1);
    width: fit-content;
    margin: 0 auto 2px;
  }
`;

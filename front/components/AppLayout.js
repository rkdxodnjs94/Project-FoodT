import React, { useState, useCallback } from "react";
import Router from "next/router";
import Image from "next/image";

import { useSelector } from "react-redux";
import { userActions } from "../reducers/user";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";

import Logo from "./assests/Logo.jpg";

const AppLayout = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);

  const onLogoutHandelr = useCallback((e) => {
    e.preventDefault();
    dispatch(userActions.logout());
    Router.push("/");
  }, []);

  const onIndexRoute = useCallback((e) => {
    e.preventDefault();
    Router.push("/");
  }, []);

  return (
    <>
      <Header>
        <MainDiv>
          <ImageDiv>
            <Image onClick={onIndexRoute} src={Logo} alt="로고" />
          </ImageDiv>
          <LeftMarginDiv />
          <BusinessDiv>
            <Link href="/business">
              <Atag>Business</Atag>
            </Link>
          </BusinessDiv>
          <ListDiv>
            <Ul>
              {isLoggedIn && (
                <Li>
                  <Link href="/map">
                    <Atag>지도</Atag>
                  </Link>
                </Li>
              )}
              {isLoggedIn && (
                <Li>
                  <Link href="/mypage/notification">
                    <Atag>알림</Atag>
                  </Link>
                </Li>
              )}
              {isLoggedIn && (
                <Li>
                  <Link href="/mypage/profile">
                    <Atag>내 정보</Atag>
                  </Link>
                </Li>
              )}
              {!isLoggedIn && (
                <Li log>
                  <LoginBack>
                    <Link href="/signup">
                      <Atag>로그인</Atag>
                    </Link>
                  </LoginBack>
                </Li>
              )}
              {!isLoggedIn && (
                <Li log>
                  <LoginBack>
                    <Link href="/">
                      <Atag>회원가입</Atag>
                    </Link>
                  </LoginBack>
                </Li>
              )}
              {isLoggedIn && (
                <Li log>
                  <LoginBack>
                    <LogoutButton onClick={onLogoutHandelr}>
                      로그아웃
                    </LogoutButton>
                  </LoginBack>
                </Li>
              )}
            </Ul>
          </ListDiv>
        </MainDiv>
      </Header>
      <div>{children}</div>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

const LogoutButton = styled.button`
  border: 0;
  background: #a1dbdf;
  font-family: "Inter";
  font-style: normal;
  /* font-weight: 400px; */
  font-size: 15px;
  /* identical to box height */
  /* text-align: center; */
  cursor: pointer;
`;

const LoginBack = styled.div`
  width: 88px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #a1dbdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const Atag = styled.a`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;

  cursor: pointer;
`;

const Li = styled.li`
  margin-top: 12px;
  margin-left: ${(props) => (props.log ? "25px" : "50px")};
  display: inline-block;
`;

const Ul = styled.ul`
  list-style: none;
`;

// 메뉴 리스트
const ListDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 780px;
  height: 114px;
  /* background: #bbb6b6; */
  /* z-index: 76; */
`;

// 사업 신청
const BusinessDiv = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 114px;
  /* background: #e98585; */
  z-index: 76;
`;

// 왼쪽 여백
const LeftMarginDiv = styled.div`
  width: 590px;
  height: 114px;
  /* background: #8a4c4c; */
  z-index: 76;
`;

// 로고
const ImageDiv = styled.div`
  width: 300px;
  height: 114px;
  /* background: #bbb6b6; */
  z-index: 76;

  cursor: pointer;
`;

const MainDiv = styled.div`
  /* 헤더 센터 */
  /* width: 1491px; */
  height: 114px;
  display: flex;
  /* background: #f2b5b5; */
  z-index: 75;
`;

const Header = styled.header`
  flex-direction: column;
  display: flex;
  justify-content: center;
  /* width: 1920px; */
  height: 164px;
  /* background: #d9d9d9; */
  z-index: 74;
`;

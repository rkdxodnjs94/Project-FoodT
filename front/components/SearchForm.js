import React from "react";
import styled from "styled-components";
import Image from "next/image";
import SearchButton from "./assests/SearchButton.png";
import BlueBanner from "./UI/BlueBanner";
// import { SearchOutlined } from "@ant-design/icons";
// import { Button } from "antd";

const SearchForm = () => {
  return (
    <BlueBanner>
      <Main_TopDiv>Food T 에 오신걸 환영합니다.</Main_TopDiv>
      <Main_BottomDiv>
        <BottomCenterDiv>
          <ListDiv>
            <Ul>
              <Li>관악구</Li>
              <Li>봉천동</Li>
            </Ul>
          </ListDiv>
          <InputDiv>
            <Input type="text"></Input>
            <SearchButtonDiv>
              <Image src={SearchButton} alt="버튼" />
            </SearchButtonDiv>
          </InputDiv>
        </BottomCenterDiv>
      </Main_BottomDiv>
    </BlueBanner>
  );
};

export default SearchForm;

// Search Button
const SearchButtonDiv = styled.div`
  margin: auto;
  margin-left: -15px;
  cursor: pointer;
`;

const Input = styled.input`
  /* vertical-align: middle; */
  display: flex;
  width: 511px;
  height: 42px;

  margin: auto;
  /* vertical-align: middle; */
  /* display: inline-block; */
  /* text-align: start; */
`;

const Li = styled.li`
  /* margin-top: 50px; */
  margin-left: ${(props) => (props.log ? "25px" : "50px")};
  display: inline-block;
`;

const Ul = styled.ul`
  list-style: none;
`;

// Search Back
const InputDiv = styled.div`
  margin-top: 5px;
  width: 601px;
  height: 83px;

  display: flex;
  text-align: center; // 내부 요소 가운데 정렬
  justify-content: center;

  background: #a1dbdf;
  border-radius: 15px;
`;

// List div
const ListDiv = styled.div`
  width: 310px;
  height: 93px;
  display: flex;
  align-items: center;

  /* background: #b16a6a; */
`;

// Bottom Center div
const BottomCenterDiv = styled.div`
  width: 1155px;
  height: 93px;

  display: flex;

  /* background: #d9d9d9; */
`;

// Main Bottom div
const Main_BottomDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 1920px;
  height: 93px;

  /* background: #b54a4a; */
`;

// Main Top div
const Main_TopDiv = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: bottom;
  /* justify-content: center; */
  /* padding: 150px 0; */
  width: 1920px;
  height: 70px;

  /* background: #eb8484; */

  /* Food T 에 오신걸 환영합니다. */

  /* font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #183c72; */
`;

/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/12/2022
  ==============================================================================
*/ // 객체의 노출여부와 표현방식
// display :
// list-style :

// 위치와 좌표
// position :
// float :
// clear :

// 크기와 여백
// width :
// height :
// padding :
// margin :

// 윤곽과 배경
// background :
// border :

// 글자와 정렬
// color :
// font :
// text-decoration :
// text-align :
// vertical-align :
// white-space :

// 내용
// content :

import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  position: fixed;
  width: 100%;
  height: 6vh;
  z-index: 1;
  background: white;
`;

const HeaderLogo = styled.h1`
  position: relative;
  align-items: flex-start;
  max-width: 1180px;
  margin: 0 auto;
`;

const MainNav = styled.nav<{ active: boolean }>`
  margin: 0 auto;

  @media screen and (max-width: 750px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    padding: 80px 0px;
    opacity: 1;
    visibility: ${(props) => (props.active ? "visible" : "")};
    transform: ${(props) =>
      props.active ? "transformX(100%)" : "translateX(100%)"};
    transition: 0.7s;
    background: white;
  }
`;
const List = styled.ul`
  display: flex;
  padding: 76px 0px 0px 0px;
`;
const ListItem = styled.li`
  display: block;
  height: 10vh;
  margin: 0 17px;
  @media screen and (max-width: 750px) {
    display: block;
  }
`;

const SubList = styled.ul`
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
`;

const SubItem = styled.li<{ dropDown: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  visibility: ${(props) => (props.dropDown ? "visible" : "hidden")};
  background: gold;

  &:hover {
    font-weight: 600;
  }
`;
const SubNav = styled(MainNav)`
  @media screen and (max-width: 750px) {
    margin: 500px 0;
  }
`;

const SubListMenu = styled.a`
  padding: 0 12px;
  @media screen and (max-width: 750px) {
    display: block;
  }
`;

const BurgerIcon = styled.button`
  display: none;
  position: relative;
  background-color: black;
  width: 20px;
  height: 2px;
  margin: 0 25px;
  cursor: pointer;

  &::before,
  &::after {
    background: black;
    width: 20px;
    height: 2px;
    position: absolute;
    content: "";
  }

  &::before {
    top: -5px;
  }
  &::after {
    top: -10px;
  }
  @media screen and (max-width: 750px) {
    display: block;
  }
`;

const CloseIcon = styled(BurgerIcon)`
  position: relative;
  width: 50px;
  height: 2px;
  background-color: white;
  margin: 0 10px;

  &::before {
    top: -5px;
    left: 10px;
    transform: rotate(45deg);
  }
  &::after {
    top: -5px;
    left: 10px;
    transform: rotate(-45deg);
  }
`;

export {
  Header,
  HeaderLogo,
  MainNav,
  List,
  ListItem,
  SubList,
  SubItem,
  SubNav,
  SubListMenu,
  BurgerIcon,
  CloseIcon,
};

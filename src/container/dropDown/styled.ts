/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/14/2022
  ==============================================================================
*/ // display :
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

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 80px;
  left: 0;
`;

const Item = styled.li<{ dropDown: boolean }>`
  display: ${(props) => (props.dropDown ? "block" : "none")};
  width: 10rem;
  height: 64px;
  background: gold;

  &:hover {
    font-weight: 600;
  }
`;

export { List, Item };

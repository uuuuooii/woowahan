/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/14/2022
  ==============================================================================
*/
import Link from "next/link";
import { useState } from "react";
import { navItem } from "../../presenter/main/navItems";
import * as D from "./styled";
import * as H from "../header/styled";

export const DropDown = () => {
  const [dropDown, setDropDown] = useState(false);
  const [nav, setNav] = useState('');

  const onHandleNav = (newNav: string) => {
    // nav 상태 바꿔주는 코드
    if (newNav === 'intro') {
      setDropDown(true)
      setNav('intro')
    }
    else if (newNav === 'service') {
      setDropDown(true)
      setNav('service')
    }
  }
  return
};




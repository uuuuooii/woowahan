/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/12/2022
  ==============================================================================
*/ import React, { FC, useState } from "react";
import HeaderIcon from "../../../public/images/headerIcon";
import * as H from "./styled";
import { navItem } from "../../presenter/main/navItems";
import Link from "next/link";
import { } from "../dropDown";

const Header: FC = () => {
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [nav, setNav] = useState('');

  const onHandleToggle = () => {
    setActive(!active);
  };

  const onHandleNav = (newNav: string) => {
    // nav 상태 바꿔주는 코드
    if (newNav === 'intro') {
      setDropDown(true)
      setNav('intro')
    }
    if (newNav === 'service') {
      setDropDown(true)
      setNav('service')
    }
    if (newNav === 'together') {
      setDropDown(true)
      setNav('together')
    }
    if (newNav === 'news') {
      setDropDown(true)
      setNav('news')
    }
  }



  return (
    <H.Header >
      <H.HeaderLogo>
        <a>
          <HeaderIcon />
        </a>
      </H.HeaderLogo>
      <H.MainNav active={active} onMouseLeave={() => setDropDown(false)}>
        <H.List>

          {navItem.map((item) => {
            if (item.title === "회사소개") {
              return (
                <H.ListItem
                  onMouseEnter={() => onHandleNav('intro')}

                >
                  <Link href={item.path}>{item.title}</Link>
                  {
                    {
                      intro: (
                        <H.SubList onClick={() => setDropDown(!dropDown)}>
                          <H.SubItem dropDown={dropDown}>
                            <Link href={""} onClick={() => setDropDown(false)}>
                              {item.subTitle}
                            </Link>
                          </H.SubItem>
                        </H.SubList>),

                    }[nav]
                  }


                </H.ListItem>
              );
            }
            if (item.title === "서비스") {
              return (
                <H.ListItem
                  onMouseEnter={() => onHandleNav('service')}

                >
                  <Link href={item.path}>{item.title}</Link>
                  {
                    {
                      service: (
                        <H.SubList onClick={() => setDropDown(!dropDown)}>
                          <H.SubItem dropDown={dropDown}>
                            <Link href={""} onClick={() => setDropDown(false)}>
                              {item.subTitle}
                            </Link>
                          </H.SubItem>
                        </H.SubList>),

                    }[nav]
                  }


                </H.ListItem>
              );
            }
            if (item.title === "함께가치") {
              return (
                <H.ListItem onMouseEnter={() => onHandleNav('together')}>
                  <Link href={item.path}>{item.title}</Link>
                  {
                    {
                      together: (
                        <H.SubList onClick={() => setDropDown(!dropDown)}>
                          <H.SubItem dropDown={dropDown}>
                            <Link href={""} onClick={() => setDropDown(false)}>
                              {item.subTitle}
                            </Link>
                          </H.SubItem>
                        </H.SubList>),

                    }[nav]
                  }
                </H.ListItem>
              );
            }
            if (item.title === "뉴스룸") {
              return (
                <H.ListItem onMouseEnter={() => onHandleNav('news')}>
                  <Link href={item.path}>{item.title}</Link>
                  {
                    {
                      news: (
                        <H.SubList onClick={() => setDropDown(!dropDown)}>
                          <H.SubItem dropDown={dropDown}>
                            <Link href={""} onClick={() => setDropDown(false)}>
                              {item.subTitle}
                            </Link>
                          </H.SubItem>
                        </H.SubList>),

                    }[nav]
                  }
                </H.ListItem>
              );
            }
          })}
          <H.ListItem>
            <Link href={""}>글꼴</Link>
          </H.ListItem>
        </H.List>
      </H.MainNav>
      <H.SubNav active={active}>
        <H.SubListMenu>배민다움</H.SubListMenu>
        <H.SubListMenu>인재영입</H.SubListMenu>
        <H.SubListMenu>한</H.SubListMenu>
        <H.SubListMenu>A</H.SubListMenu>
      </H.SubNav>
      {active ? (
        <H.CloseIcon onClick={onHandleToggle} />
      ) : (
        <H.BurgerIcon onClick={onHandleToggle} />
      )}
    </H.Header>
  );
};

export default Header;

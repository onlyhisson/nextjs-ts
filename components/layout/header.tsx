import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { RowDiv, ColDiv, Span } from "../../styles/global-styled";
import { MdLanguage } from "react-icons/md";

const LANGUAGES = ["kor", "eng"];

const SelectBox = styled(RowDiv)`
  position: relative;
  margin-right: 15px;

  svg {
    color: ${(props) => props.theme.colors.grey1};
  }

  .sel-leng {
    width: 32px;
  }

  .l-item {
    left: 4px;
  }

  .l-item:hover {
    span {
      color: ${(props) => props.theme.colors.main3};
    }
  }
`;

const LangItem = styled.div<{ top: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${(props) => props.top}px;
  right: 10px;

  span {
    margin-left: 8px !important;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fonts.size.sm}px !important;
  }
`;

const LangWrapper = styled(RowDiv)`
  position: absolute;
  top: -19px;
  left: -100px;
  padding: 3px;
  padding-right: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.grey1};
  border-radius: 3px;
  height: 30px;
  width: 72px;
  overflow: hidden;

  transition: height 0.5s, background-color 0.5s;

  &:hover {
    height: 90px;
    background-color: ${(props) => props.theme.colors.theme6};
  }
`;

const HeaderWrapper = styled.header`
  z-index: 1;
  position: fixed;
  top: 0;
  width: -webkit-fill-available;
  padding: 0 3.5rem;
  height: ${(props) => props.theme.size.dHeader}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: ${(props) => props.theme.fonts.size.lg}px;

  span {
    color: ${(props) => props.theme.colors.font};
  }

  a {
    text-decoration: none;
  }

  .header-s {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-l {
    img {
      margin-right: 50px;
      height: 40px;
    }
  }

  .header-r {
  }

  .h-menu-item {
    line-height: 28px;
    margin-right: 25px;
    border-bottom-style: solid;
    border-width: 2px;
    border-color: rgba(0, 0, 0, 0);
    transition: border-color 0.5s;

    &:hover {
      border-bottom-style: solid;
      border-width: 2px;
      border-color: ${(props) => props.theme.colors.main3};
    }

    span {
      transition: color 0.5s;
    }

    span:hover {
      color: ${(props) => props.theme.colors.main3};
    }
  }
`;

const LanguageBox = () => {
  const [lang, setLang] = useState(0);

  return (
    <SelectBox className="sel-box">
      <LangWrapper>
        <ColDiv>
          <LangItem top={9}>
            <MdLanguage /> <Span className="sel-leng">{LANGUAGES[lang]}</Span>
          </LangItem>
          {LANGUAGES.map((el, idx) => (
            <LangItem
              key={idx}
              top={9 + 30 * (idx + 1)}
              className="l-item"
              onClick={() => setLang(idx)}
            >
              <Span>{el}</Span>
            </LangItem>
          ))}
        </ColDiv>
      </LangWrapper>
    </SelectBox>
  );
};

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-s header-l">
        <img src={`/images/logo/logo_wh.png`} alt="logo" />
        <Link href="/">
          <a className="h-menu-item">
            <Span>?????? / ??????</Span>
          </a>
        </Link>
        <Link href="/">
          <a className="h-menu-item">
            <Span>????????????</Span>
          </a>
        </Link>
        <Link href="/">
          <a className="h-menu-item">
            <Span>NFT</Span>
          </a>
        </Link>
      </div>
      <div className="header-s header-r">
        <LanguageBox />
        <Link href="/">
          <a className="h-menu-item">
            <Span>?????????</Span>
          </a>
        </Link>
      </div>
    </HeaderWrapper>
  );
};

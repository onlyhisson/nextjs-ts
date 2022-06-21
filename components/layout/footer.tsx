import Link from "next/link";
import styled from "styled-components";
import { Span } from "../../styles/global-styled";

const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.theme5};
  font-size: ${(props) => props.theme.fonts.size.sm}px;
  padding: 35px 20px;

  div {
    max-width: 1300px;
  }

  span {
    color: ${(props) => props.theme.colors.font};
  }

  a {
    padding: 5px 0;
    text-decoration: none;
  }

  .footer-top {
    width: 100%;
    padding-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: solid 1px ${(props) => props.theme.colors.theme3};
    img {
      width: 90px;
    }
  }

  .footer-body {
    padding-top: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    span {
      color: ${(props) => props.theme.colors.grey1};
    }
  }

  .footer-col {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-top">
        <img src={`/images/logo/logo_wh.png`} alt="logo" />
      </div>
      <div className="footer-body">
        <div className="footer-col">
          <Link href="/">
            <a>
              <Span>Intro</Span>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Span>About</Span>
            </a>
          </Link>
        </div>
        <div className="footer-col">
          <Link href="/">
            <a>
              <Span>고객지원</Span>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Span>공지사항</Span>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Span>1:1 문의</Span>
            </a>
          </Link>
        </div>
        <div className="footer-col">
          <Link href="/">
            <a>
              <Span>이용약관</Span>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Span>파트너</Span>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Span>보증기관</Span>
            </a>
          </Link>
        </div>
        <div className="footer-col">
          <Link href="/">
            <a>
              <Span>help@fundstoa.com</Span>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Span>hello@fundstoa.com</Span>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Span>biz@fundstoa.com</Span>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Span>notice@fundstoa.com</Span>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Span>support@fundstoa.com</Span>
            </a>
          </Link>
        </div>
      </div>
    </FooterWrapper>
  );
};

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

function Footer() {
  return (
    <StyledWrapper>
      <StyledInWrapper>
        <StyledBottomWrapper>
          <StyledBottomLogoWrapper>
            <Image src="/assets/images/logo.png" alt="logo_img" fill />
          </StyledBottomLogoWrapper>

          <Link href="/">
            <StyledLinkApp>Get the app</StyledLinkApp>
          </Link>

          <StyledCopyRight>
            <p>
              Apple® and the Apple logo® are trademarks of Apple Inc.,
              registered in the U.S. and other countries. App Store is a service
              mark of Apple Inc.
            </p>
            <p>
              Google Play and the Google Play logo are trademarks of Google LLC.
            </p>
            <p>Copyright © Develop, Design by MyPack. All rights reserved.</p>
          </StyledCopyRight>
        </StyledBottomWrapper>
      </StyledInWrapper>
    </StyledWrapper>
  );
}

export default Footer;

const StyledWrapper = styled.footer`
  position: static;
  bottom: 0px;
  width: 100%;
  height: fit-content;
`;

const StyledInWrapper = styled.div`
  margin: 0 auto;
  padding: 4rem 0rem 0rem 3rem;
`;

const StyledBottomWrapper = styled.div`
  margin-bottom: 4rem;
`;

const StyledBottomLogoWrapper = styled.div`
  position: relative;
  width: 7rem;
  height: 7rem;
  margin: 1rem 0;
`;

const StyledLinkApp = styled.h1`
  font-size: 5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  :hover {
    cursor: pointer;
    transition: all 0.6s;

    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.color.neonMint},
      ${({ theme }) => theme.color.neonPink}
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const StyledCopyRight = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-top: 0.8rem;
`;

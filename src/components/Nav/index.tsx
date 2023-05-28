import Link from "next/link";
import Hamburger from "src/components/Nav/Hamburger";
import Search from "src/components/Search";
import styled from "styled-components";

function Nav() {
  return (
    <StyledWrapper>
      <Link href="/">
        <StyledLogo>MyPack</StyledLogo>
      </Link>
      <Search />
      <Hamburger />
    </StyledWrapper>
  );
}

export default Nav;

const StyledWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 1.8rem 2rem;
`;

const StyledLogo = styled.h1`
  font-size: 1.55rem;

  :hover {
    cursor: pointer;
  }
`;

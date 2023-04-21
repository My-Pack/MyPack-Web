import styled from "styled-components";
import Hamburger from "src/components/Nav/Hamburger";
import Search from "src/components/Search";

function Nav() {
  return (
    <StyledWrapper>
      <StyledLogo>MyPack</StyledLogo>
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
`;

import Link from "next/link";
import styled from "styled-components";

function Button() {
  return (
    <Link href="/">
      <StyledBtn>Get Started for Free</StyledBtn>
    </Link>
  );
}

export default Button;

const StyledBtn = styled.div`
  text-align: center;
  width: 18rem;
  padding: 1.1rem 2rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.borderBackground};
  border-radius: ${({ theme }) => theme.borderRadius.button};
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.color.buttonHoverBlack};
    transition: all 0.4s;
  }
`;

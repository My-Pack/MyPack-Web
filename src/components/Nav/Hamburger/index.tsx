import Link from "next/link";
import { useState } from "react";
import styled, { css } from "styled-components";

function Hamburger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClickHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledMenuWrapper onClick={onClickHamburger}>
        <Styledhamburger isOpen={isOpen} />
      </StyledMenuWrapper>
      <StyledMenuListWrapper isOpen={isOpen}>
        <Link href="/designCard">
          <StyledMenuElement>Card Design</StyledMenuElement>
        </Link>
        <Link href="/profile">
          <StyledMenuElement>My Card</StyledMenuElement>
        </Link>
        <Link href="/introduce">
          <StyledMenuElement>Introduce MyPack</StyledMenuElement>
        </Link>

        <Link href="/login">
          <StyledMenuElement>Login</StyledMenuElement>
        </Link>
      </StyledMenuListWrapper>
    </>
  );
}

export default Hamburger;

const StyledMenuElement = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};

  :hover {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.color.neonMint},
      ${({ theme }) => theme.color.neonPink}
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    transition: ease-in all 0.25s;
    cursor: pointer;
  }
`;

const StyledMenuListWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 2rem;
  gap: 10%;
  width: 25vw;
  height: 100vh;
  background-color: rgb(32, 32, 32, 0.7);
  position: fixed;
  transition: right 0.8s ease;

  right: ${({ isOpen }) =>
    isOpen
      ? 0
      : "-30vw"}; // 창 크기 조절시 보이는 문제가 있어 의도적으로 멀리 두었습니다.
  top: 0;
  z-index: 999;
`;

const StyledMenuWrapper = styled.div`
  cursor: pointer;
  position: relative;
  height: 1.8rem;
  z-index: 1000;
`;

const Styledhamburger = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: inline-block;
  left: 0;
  width: 1.8rem;
  height: 0.15rem;
  transition: all 0.8s;
  background-color: ${(props) =>
    props.isOpen
      ? css`
          ${({ theme }) => theme.color.glass}
        `
      : css`
          ${({ theme }) => theme.color.white};
        `};
  &::before,
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    left: 0;
    background-color: ${({ theme }) => theme.color.white};
    width: 1.8rem;
    height: 0.15rem;
    transition: all 0.8s;
  }
  &::before {
    top: ${(props) => (props.isOpen ? "0" : "-0.75rem")};
    transform: ${(props) =>
      props.isOpen ? "rotate(135deg)" : "rotate(0)"}; // 225
  }
  &::after {
    top: ${(props) => (props.isOpen ? "0" : "0.75rem")};
    transform: ${(props) => (props.isOpen ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

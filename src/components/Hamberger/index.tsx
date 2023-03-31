import React, { useState } from "react";
import styled, { css } from "styled-components";

function Hamberger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClickHamberger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledMenuWrapper onClick={onClickHamberger}>
      <StyledHamberger isOpen={isOpen} />
    </StyledMenuWrapper>
  );
}

export default Hamberger;

const StyledMenuWrapper = styled.div``;
const StyledHamberger = styled.div<{ isOpen: boolean }>`
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
          ${({ theme }) => theme.color.black};
        `};
  &::before,
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    left: 0;
    background-color: ${({ theme }) => theme.color.black};
    width: 1.8rem;
    height: 0.15rem;
    transition: all 0.8s;
  }
  &::before {
    top: ${(props) => (props.isOpen ? "0" : "-0.75rem")};
    transform: ${(props) => (props.isOpen ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.isOpen ? "0" : "0.75rem")};
    transform: ${(props) => (props.isOpen ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

import styled from "styled-components";

export const InputWrapper = styled.input`
  all: unset;
  min-width: 20rem;
  min-height: 2.5rem;
  padding: 0.3rem 1rem;
  background-color: ${({ theme }) => theme.color.borderBackground};
  border-radius: ${({ theme }) => theme.borderRadius.input};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: 0.9rem;
  letter-spacing: 0.6px;
`;

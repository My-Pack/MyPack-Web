import { ChangeEvent, MouseEvent } from "react";
import Title from "src/components/Form/Title";
import styled from "styled-components";

interface IProps {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: (event: MouseEvent<HTMLTextAreaElement>) => void;
}

function FormSummary({ onChange, onClick }: IProps) {
  return (
    <>
      <Title
        title="내용"
        subTitle="카드를 당신의 이야기로 꾸며주세요"
        essential
      />
      <StyledTextArea
        onClick={(e) => {
          onClick?.(e);
        }}
        onChange={(e) => {
          onChange?.(e);
        }}
        required
        placeholder="Enter Summary"
      />
    </>
  );
}

export default FormSummary;

const StyledTextArea = styled.textarea`
  all: unset;
  min-width: 28rem;
  min-height: 13rem;
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.color.borderBackground};
  border-radius: ${({ theme }) => theme.borderRadius.input};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: 0.9rem;
  letter-spacing: 0.6px;
  margin-top: 1rem;
  margin-bottom: 2.3rem;
`;

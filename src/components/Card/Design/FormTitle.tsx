import { ChangeEvent, MouseEvent } from "react";
import Title from "src/components/Form/Title";
import styled from "styled-components";
import { InputWrapper } from "styles/css/formInput";

interface IProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
}

function FormTitle({ onChange, onClick }: IProps) {
  return (
    <>
      <StyledInput
        type="text"
        onClick={(e) => {
          onClick?.(e);
        }}
        onChange={(e) => {
          onChange?.(e);
        }}
        required
        placeholder="Enter Title"
      />
    </>
  );
}

export default FormTitle;

const StyledInput = styled(InputWrapper)`
  margin-bottom: 2.3rem;
`;

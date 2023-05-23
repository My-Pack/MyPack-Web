import { ChangeEvent, MouseEvent, useRef } from "react";
import Title from "src/components/Form/Title";
import styled from "styled-components";

interface IImageUploadProps {
  saveFileImage?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
}

function FormImage({ saveFileImage, onChange, onClick }: IImageUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Title title="이미지" subTitle="카드의 표지를 업로드해주세요" essential />
      <StyledInputWrapper>
        <StyledInput
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          ref={inputRef}
          onClick={(e) => {
            onClick?.(e);
          }}
          onChange={(e) => {
            saveFileImage?.(e), onChange?.(e);
          }}
          required
        />
      </StyledInputWrapper>
    </>
  );
}

export default FormImage;

const StyledInputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  position: absolute;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 1rem;
`;

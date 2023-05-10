import { ChangeEvent, useRef } from "react";
import styled from "styled-components";

interface IImageUploadProps {
  saveFileImage?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function FormImage({ saveFileImage, onChange }: IImageUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <StyledInput
      type="file"
      accept="image/png, image/jpeg, image/jpg"
      ref={inputRef}
      onChange={(e) => {
        saveFileImage?.(e), onChange?.(e);
      }}
      required
    />
  );
}

export default FormImage;

const StyledInput = styled.input`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 1rem;
`;

import { ChangeEvent } from "react";

interface IProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function FormTitle({ onChange }: IProps) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          onChange?.(e);
        }}
        required
      />
    </div>
  );
}

export default FormTitle;

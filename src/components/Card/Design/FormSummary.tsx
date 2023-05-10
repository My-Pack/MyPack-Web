import { ChangeEvent } from "react";

interface IProps {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

function FormSummary({ onChange }: IProps) {
  return (
    <div>
      <textarea
        onChange={(e) => {
          onChange?.(e);
        }}
        required
      />
    </div>
  );
}

export default FormSummary;

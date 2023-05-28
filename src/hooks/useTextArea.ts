import { ChangeEvent, useState } from "react";

interface Props {
  initialValue?: string;
}

function useTextArea({ initialValue = "" }: Props) {
  const [value, setValue] = useState<string>(initialValue);

  function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }
  function clearValue() {
    setValue("");
  }

  return { value, onChange, clearValue };
}

export default useTextArea;

import { useState } from "react";

function useModal() {
  const [visible, setVisible] = useState(false);

  function updateVisible() {
    setVisible(!visible);
  }

  return { visible, updateVisible };
}

export default useModal;

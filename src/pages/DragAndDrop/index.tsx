import React from "react";
import styled from "styled-components";
import { DragObject, DropObject } from "src/components/DragAndDrop";

function Test() {
  // 드래그 앤 드롭 사용 용법 - 재관
  // 기존 react-dnd 라이브러리를 컴포넌트로 레핑했습니다.
  // 1. DragObject에 드래그 할 컴포넌트를 넣습니다.
  // 2. DropObject에 드롭 할 컴포넌트를 넣습니다.
  // 3. DropObject의 onDrop에 드롭 시 실행할 함수를 넣습니다.
  // 카드가 넘어가는 애니메이션을 구현하게 될텐데 좋아요 드롭시 어떻게 사라지게할지는 논의를 더 해봐야 될거같습니다.(굳이 사라져야하나?)

  return (
    <DNDWrapper>
      <DragObject>
        <CardEXWrapper />
      </DragObject>
      <DropObject onDrop={() => alert("drop")}>
        <LikeBoxWrapper />
      </DropObject>
    </DNDWrapper>
  );
}

export default Test;
const LikeBoxWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: gray;
  position: fixed;
  bottom: 0;
  left: 0;
`;
const DNDWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const CardEXWrapper = styled.div`
  width: 150px;
  height: 200px;
  background-color: #f5f5f5;
  color: black;
`;

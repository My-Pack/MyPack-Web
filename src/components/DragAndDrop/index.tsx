import React from "react";
import styled from "styled-components";
import { useDrag, useDrop } from "react-dnd";
//테스트 및 적용을 위해 pages 폴더에 생성

function DropObject({
  children,
  onDrop,
}: {
  children: React.ReactNode;
  onDrop: () => void;
}) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: () => {
      onDrop();
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  return (
    <div ref={dropRef} style={{ backgroundColor: isOver ? "yellow" : "white" }}>
      {children}
    </div>
  );
}
function DragObject({ children }: { children: React.ReactNode }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "card",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
}

export { DragObject, DropObject };

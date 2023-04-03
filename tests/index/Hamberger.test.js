import { render, screen } from "@testing-library/react";
import Hamberger from "src/components/Hamberger";

test("list 요소 확인", () => {
  render(<Hamberger />);
  const linkEle = screen.getByRole("p");
  expect(linkEle).toBeInTheDocument("내 카드");
});

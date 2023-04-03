import { render, screen } from "@testing-library/react";
import Hamburger from "src/components/Hamburger";

test("list 요소 확인", () => {
  render(<Hamburger />);
  const linkEle = screen.getByRole("p");
  expect(linkEle).toBeInTheDocument("내 카드");
});

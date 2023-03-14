//tests/index/index.test.ts

import { render, screen } from "@testing-library/react";
import Home from "../../src/pages";

describe("<Home />", () => {
  it("renders a heading", () => {
    const { container } = render(<Home />);

    const home = screen.getByText("Home");

    expect(home).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

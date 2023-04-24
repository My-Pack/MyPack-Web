import React from "react";
import { render } from "@testing-library/react";
import Hamburger from "src/components/Nav/Hamburger";
import { ThemeProvider } from "styled-components";
import theme from "styles/Theme/theme";

describe("Hamburger", () => {
  it("render btns", () => {
    const utils = render(
      <ThemeProvider theme={theme}>
        <Hamburger />
      </ThemeProvider>,
    );
    utils.getByText("내 정보");
    utils.getByText("알림");
    utils.getAllByText("나중에 추가");
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "src/pages/login";
import { ThemeProvider } from "styled-components";
import theme from "styles/Theme/theme";

describe("Login component", () => {
  it("renders the MyPack logo", () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>,
    );
    const logo = screen.getByText("MyPack");
    expect(logo).toBeInTheDocument();
  });

  it("renders the App Store button", () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>,
    );
    const appStoreButton = screen.getByAltText("appstore");
    expect(appStoreButton).toBeInTheDocument();
  });

  it("renders the user account image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>,
    );
    const accountImage = screen.getByAltText("account");
    expect(accountImage).toBeInTheDocument();
  });
});

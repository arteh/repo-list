import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import { FavoritesList } from "../favorites-list";

afterEach(cleanup);

describe("Favorites List component", () => {
  it("should render the correct title", () => {
    render(<FavoritesList />);
    expect(screen.getByText("My favorite github repositories")).toBeInTheDocument();
  });

  it("should render the correct page elements", () => {
    const { asFragment } = render(<FavoritesList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
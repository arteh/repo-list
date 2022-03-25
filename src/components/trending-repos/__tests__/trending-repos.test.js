import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import { TrendingRepos } from "../trending-repos";

afterEach(cleanup);

describe("Trending Repos component", () => {
  it("should render the correct title", () => {
    render(<TrendingRepos />);
    expect(screen.getByText("Most starred github repositories in the last 7 days")).toBeInTheDocument();
  });

  it("should render the correct page elements", () => {
    const { asFragment } = render(<TrendingRepos />);
    expect(asFragment()).toMatchSnapshot();
  });
});

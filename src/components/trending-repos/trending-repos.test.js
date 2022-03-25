import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import { TrendingRepos } from "./trending-repos";

afterEach(cleanup);

describe("Trending Repos component", () => {
  it("should render an accordion button with the right title", () => {
    render(<TrendingRepos />);
    expect(screen.getByText("Most starred github repositories in the last 7 days")).toBeInTheDocument();
  });

//   it("the accordion content should not be visible", () => {
//     const { container } = render(<Accordion data={accordionData} />);

//     const accordion = container.querySelector('[class*="accordion"]');

//     expect(
//       accordion.querySelector('div[class*="accordion-content"]')
//     ).not.toBeInTheDocument();
//   });

//   it("should render the accordion content when the accordion button is clicked", () => {
//     const { container } = render(<Accordion data={accordionData} />);

//     const button = container.querySelector("button");
//     fireEvent.click(button);

//     const accordion = container.querySelector('[class*="accordion"]');

//     expect(
//       accordion.querySelector('div[class*="accordion-content"]')
//     ).toBeInTheDocument();
//   });
});

const { render, screen, fireEvent } = require("@testing-library/react");
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "./mocks/resListMockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the body component with search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  //   const cardsBeforeSearch = screen.getAllByTestId("resCard")

  //   expect(cardsBeforeSearch.length).toBe(20)

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "kfc" } });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(1);
});

it("should filter top rated resturant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforefilter = screen.getAllByTestId("resCard");

  expect(cardsBeforefilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Resturants",
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(8);
});

import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from './mocks/resCardMock.json'
import "@testing-library/jest-dom"
import { withVegLabel } from "../ResturantCard";

it("should render the resturant card component with data", () => {
  render(<ResturantCard resData={MOCK_DATA}/>);

  const name = screen.getByText("McDonald's");

  expect(name).toBeInTheDocument()
});

it("should render the resturant card with veg label", () => {
  const ResturantCardWithVegLabel = withVegLabel(ResturantCard);

  render(<ResturantCardWithVegLabel resData={MOCK_DATA}/>)

  const vegLabel = screen.getByText("Veg");

  expect(vegLabel).toBeInTheDocument()
});

import { render, screen } from "@testing-library/react";
import { Bet } from "types/bets";
import { ChipButton } from "./ChipButton";

test("renders ChipButton", () => {
  render(<ChipButton chip={{ id: Bet.ROCK, caption: "Rock" }} />);
  const element = screen.getByText(/Rock/i);
  expect(element).toBeInTheDocument();
});

test("renders ChipButton", () => {
  render(<ChipButton chip={{ id: Bet.LIZARD, caption: "Lizard" }} />);
  const element = screen.getByText(/Lizard/i);
  expect(element).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import { GameResult } from "./GameResult";
import { Outcome } from "types/outcome";

test("renders GameResult", () => {
  render(<GameResult result={Outcome.DRAW} />);
  expect(screen.getByText(/DRAW!!!/i)).toBeInTheDocument();
});

test("renders GameResult", () => {
  render(<GameResult result={Outcome.PLAYER_WIN} />);
  expect(screen.getByText(/YOU WIN!!!/i)).toBeInTheDocument();
});

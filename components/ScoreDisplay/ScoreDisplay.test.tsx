import { render, screen } from "@testing-library/react";
import { ScoreDisplay } from "./ScoreDisplay";

test("renders ScreenDisplay", () => {
  render(<ScoreDisplay score={{ player: 1, computer: 2 }} />);
  expect(screen.getByText(/1:2/i)).toBeInTheDocument();
});

test("renders ScreenDisplay", () => {
  render(<ScoreDisplay score={{ player: 3, computer: 3 }} />);
  expect(screen.getByText(/3:3/i)).toBeInTheDocument();
});

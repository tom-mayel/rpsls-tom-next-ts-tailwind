import { FC } from "react";
import { Bet } from "types/bets";
import { Outcome } from "types/outcome";

interface Props {
  result: Outcome;
}

export const GameResult: FC<Props> = ({ result }) => {
  return (
    <div className="inline-block p-2 bg-white">
      <div>{`${
        result === Outcome.DRAW
          ? "DRAW!!!"
          : result === Outcome.PLAYER_WIN
          ? "YOU WIN!!!"
          : "YOU LOST!!!"
      }`}</div>
    </div>
  );
};

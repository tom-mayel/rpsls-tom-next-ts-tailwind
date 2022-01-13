import { Bet } from "types/bets";
import { Outcome } from "types/outcome";
import { WinLoose } from "types/win-loose";

const gameRules: Array<WinLoose> = [
  { win: Bet.SCISSORS, loose: Bet.PAPER },
  { win: Bet.SCISSORS, loose: Bet.LIZARD },

  { win: Bet.PAPER, loose: Bet.ROCK },
  { win: Bet.PAPER, loose: Bet.SPOCK },

  { win: Bet.LIZARD, loose: Bet.SPOCK },
  { win: Bet.LIZARD, loose: Bet.PAPER },

  { win: Bet.SPOCK, loose: Bet.ROCK },
  { win: Bet.SPOCK, loose: Bet.SCISSORS },

  { win: Bet.ROCK, loose: Bet.SCISSORS },
  { win: Bet.ROCK, loose: Bet.LIZARD },
];

export const getGameResult = (player: Bet, computer: Bet) => {
  if (player === computer) {
    return Outcome.DRAW;
  }

  return gameRules.find((r) => r.win === player && r.loose === computer)
    ? Outcome.PLAYER_WIN
    : Outcome.COMPUTER_WIN;
};

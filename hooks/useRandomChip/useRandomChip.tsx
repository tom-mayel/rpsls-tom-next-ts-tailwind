import { buttons } from "components/PlayerControls/const-buttons";
import { useEffect, useState } from "react";
import { Bet } from "types/bets";
import { Chip } from "types/chip";

export const useRandomChip = () => {
  const [answer, setAnswer] = useState<Chip>();
  useEffect(() => {
    const randIndex = Math.floor(Math.random() * buttons.length);
    setAnswer(buttons[randIndex]);
  }, []);

  return { answer };
};

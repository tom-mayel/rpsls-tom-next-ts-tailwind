import { useRandomChip } from "hooks/useRandomChip";
import { PlayerControls } from "components/PlayerControls";
import Image from "next/image";
import { FC, useMemo, useState } from "react";
import { ChipButton } from "components/ChipButton";
import { GameResult } from "components/GameResult";
import { Chip } from "types/chip";
import { ResetGame } from "components/ResetGame";
import { getGameResult } from "utils/game-engine";
import { Outcome } from "types/outcome";
import { ScoreDisplay } from "components/ScoreDisplay";

export const Game: FC = (): JSX.Element => {
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [playerChip, setPlayerChip] = useState<Chip>();
  const { answer: computerChip } = useRandomChip();

  const result = useMemo(() => {
    if (!playerChip || !computerChip) {
      return null;
    }
    const r = getGameResult(playerChip.id, computerChip.id);
    if (r === Outcome.PLAYER_WIN) {
      setScore((old) => ({ ...old, player: old.player + 1 }));
    } else if (r === Outcome.COMPUTER_WIN) {
      setScore((old) => ({ ...old, computer: old.computer + 1 }));
    }
    return r;
  }, [playerChip?.id, computerChip?.id]);

  console.log({ playerChip, computerChip });

  return (
    <div className="flex flex-col w-1/2 h-full">
      <div className="w-full mb-10 text-center">
        <ScoreDisplay score={score} />
      </div>
      <div>
        <div className="h-12 text-center">
          {result && <GameResult result={result} />}
        </div>
        <div className="w-40 h-20 m-auto">
          {playerChip && <ResetGame onClick={() => setPlayerChip(undefined)} />}
        </div>
      </div>
      <div className="flex justify-between w-full h-full p-6 border-4 border-gray-500 rounded-3xl">
        <div className="flex items-center justify-center w-1/3">
          {playerChip && <ChipButton chip={playerChip} />}
          {!playerChip && (
            <PlayerControls click={(chip: Chip) => setPlayerChip(chip)} />
          )}
        </div>
        <div className="flex flex-col items-center justify-center w-1/3">
          <Image src="/media/sheldon.jpg" width={300} height={200} />
        </div>
        <div className="flex items-center justify-center w-1/3">
          {playerChip && computerChip && <ChipButton chip={computerChip} />}
        </div>
      </div>
    </div>
  );
};

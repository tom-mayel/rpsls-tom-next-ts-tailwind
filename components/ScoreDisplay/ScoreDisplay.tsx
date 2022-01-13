import { FC } from "react";
import { Score } from "types/score";
interface Props {
  score?: Score;
}

export const ScoreDisplay: FC<Props> = ({ score }) => {
  return (
    <div className="flex items-center h-40 bg-gray-700 rounded-3xl">
      <div className="w-1/3 text-3xl font-bold text-white">PLAYER</div>
      <div className="w-1/3 px-6 py-3 text-5xl tracking-widest bg-white border-4 border-red-900 rounded-xl">
        {`${score?.player}`}:{`${score?.computer}`}
      </div>
      <div className="w-1/3 text-3xl font-bold text-white">COMPUTER</div>
    </div>
  );
};

import { FC } from "react";

interface Props {
  onClick: () => void;
}
export const ResetGame: FC<Props> = ({ onClick }) => (
  <div className="p-4 text-center bg-yellow-100 rounded-2xl" onClick={onClick}>
    PLAY AGAIN
  </div>
);

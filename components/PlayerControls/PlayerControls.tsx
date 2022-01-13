import { FC } from "react";
import { Chip } from "types/chip";
import { ChipButton } from "components/ChipButton";
import { buttons } from "./const-buttons";

interface Props {
  click: (c: Chip) => void;
}

export const PlayerControls: FC<Props> = ({ click }) => (
  <div className="flex flex-col items-center gap-3">
    {buttons.map((b) => (
      <div onClick={() => click(b)} key={b.id} className="cursor-pointer">
        <ChipButton chip={b} />
      </div>
    ))}
  </div>
);

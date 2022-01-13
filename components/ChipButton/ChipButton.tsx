import { FC } from "react";
import { Chip } from "types/chip";

interface Props {
  chip: Chip;
}
export const ChipButton: FC<Props> = ({ chip }) => (
  <div
    className="w-32 p-4 text-center text-gray-800 bg-gray-50 rounded-xl"
    key={chip.id}
  >
    {chip.caption}
  </div>
);

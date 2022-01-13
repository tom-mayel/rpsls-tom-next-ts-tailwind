import { Game } from "components/Game";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Bet } from "../types/bets";
import { Chip } from "../types/chip";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-black">
      <Game />
    </div>
  );
};

export default Home;

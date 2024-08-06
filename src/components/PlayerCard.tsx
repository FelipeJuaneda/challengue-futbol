import React from "react";
import Image from "next/image";
import { Player } from "@/types";

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const defaultAvatar = "/images/default-avatar.png";

  return (
    <div className="border p-4 rounded-lg shadow-md flex content-center flex-col justify-center items-center cursor-pointer">
      <Image
        src={player.player_image || defaultAvatar}
        alt={player.player_name || "Card de jugadores"}
        width={150}
        height={150}
        loading="lazy"
        className="rounded-full"
      />
      <h2 className="text-xl font-bold">{player.player_name}</h2>
      <p>{player.player_number}</p>
    </div>
  );
};

export default PlayerCard;

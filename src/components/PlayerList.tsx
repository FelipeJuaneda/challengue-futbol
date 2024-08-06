import React from "react";
import { Player } from "@/types";
import PlayerCard from "./PlayerCard";

interface PlayerListProps {
  players: Player[];
  onSelectPlayer: (player: Player) => void;
}

const PlayerList: React.FC<PlayerListProps> = ({ players, onSelectPlayer }) => {
  if (!players || players.length === 0) {
    return <div>No hay jugadores disponibles.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">Seleccionar Jugadores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {players.map((player) => (
          <div key={player.player_id} onClick={() => onSelectPlayer(player)}>
            <PlayerCard player={player} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;

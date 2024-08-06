import React from "react";
import PlayersDrawer from "../PlayersDrawer";
import { Team } from "@/types";

interface PlayersActionsProps {
  team: Team;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  handleRemovePlayer: (playerId: string, playerName: string) => void;
}

const PlayersActions: React.FC<PlayersActionsProps> = ({
  team,
  isOpen,
  onOpen,
  onClose,
  handleRemovePlayer,
}) => {
  return (
    <>
      <button
        onClick={onOpen}
        className="fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full shadow-lg"
      >
        Jugadores Vinculados
      </button>
      <PlayersDrawer
        team={team}
        isOpen={isOpen}
        onClose={onClose}
        handleRemovePlayer={handleRemovePlayer}
      />
    </>
  );
};

export default PlayersActions;

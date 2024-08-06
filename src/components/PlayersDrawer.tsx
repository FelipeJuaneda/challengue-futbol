import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Team } from "@/types";
import { IoIosCloseCircle, IoIosArrowBack } from "react-icons/io";

interface PlayersDrawerProps {
  team: Team;
  isOpen: boolean;
  onClose: () => void;
  handleRemovePlayer: (playerId: string, playerName: string) => void;
}

const PlayersDrawer: React.FC<PlayersDrawerProps> = ({
  team,
  isOpen,
  onClose,
  handleRemovePlayer,
}) => {
  const defaultAvatar = "/images/default-avatar.png";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-lg z-50 p-4 overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Jugadores Vinculados</h3>
            <IoIosArrowBack
              onClick={onClose}
              className="text-2xl cursor-pointer"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {team.players.length > 0 ? (
              team.players.map((player) => (
                <motion.div
                  key={player.player_id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative border border-green-700 p-4 rounded-lg shadow-md flex content-center flex-col justify-center items-center"
                >
                  <IoIosCloseCircle
                    onClick={() =>
                      handleRemovePlayer(player.player_id, player.player_name)
                    }
                    className="absolute top-2 right-2 text-red-600 text-2xl cursor-pointer"
                  />

                  <Image
                    src={player.player_image || defaultAvatar}
                    alt={player.player_name || "Jugador elegido"}
                    width={150}
                    height={150}
                    className="rounded-full"
                    loading="lazy"
                  />
                  <h2 className="text-xl font-bold">{player.player_name}</h2>
                  <p>{player.player_type}</p>
                </motion.div>
              ))
            ) : (
              <div>No hay jugadores seleccionados</div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlayersDrawer;

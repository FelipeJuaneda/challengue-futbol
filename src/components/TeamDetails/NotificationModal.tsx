import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { Team } from "@/types";

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  teams: Team[];
  areTeamsComplete: boolean;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ isOpen, onClose, message, teams, areTeamsComplete }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Notificación" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" overlayClassName="fixed inset-0 bg-black bg-opacity-50">
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Notificación</h2>
        <p className="mb-4">{message}</p>
        {areTeamsComplete && (
          <div className="flex justify-around">
            {teams.map((team, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-2">{team.team_name}</h3>
                <ul>
                  {team.players.map((player) => (
                    <li key={player.player_id}>{player.player_name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        <button onClick={onClose} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Cerrar</button>
      </motion.div>
    </Modal>
  );
};

export default NotificationModal;

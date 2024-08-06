"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Team } from "@/types";
import { FaEdit } from "react-icons/fa";

interface TeamCardProps {
  team: Team;
  onDelete: (id: string) => void;
  onEdit: (id: string, newName: string) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ team, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(team.team_name);

  const handleSave = () => {
    onEdit(team.id, newName);
    setIsEditing(false);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2">
        {isEditing ? (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="border p-2 rounded"
            />
            <button
              onClick={handleSave}
              className="bg-green-500 text-white p-2 rounded"
            >
              Guardar
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Cancelar
            </button>
          </div>
        ) : (
          <h2 className="text-xl font-bold">{team.team_name}</h2>
        )}
        {!isEditing && (
          <button onClick={() => setIsEditing(true)} className="text-gray-600">
            <FaEdit size={20} />
          </button>
        )}
      </div>
      <p>{team.players.length}/5 jugadores</p>
      <div className="flex justify-between pt-2">
        <Link
          className="bg-green-500 text-white p-2 rounded"
          href={`/teams/${team.id}`}
        >
          Ver Detalles
        </Link>
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={() => onDelete(team.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TeamCard;

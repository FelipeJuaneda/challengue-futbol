import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

interface TeamNameEditorProps {
  teamId: string;
  teamName: string;
  onSave: (teamId: string, newName: string) => void;
}

const TeamNameEditor: React.FC<TeamNameEditorProps> = ({ teamId, teamName, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTeamName, setNewTeamName] = useState(teamName);

  const handleSave = () => {
    onSave(teamId, newTeamName);
    setIsEditing(false);
  };

  return (
    <div className="text-center mb-4">
      {isEditing ? (
        <div className="flex items-center gap-2 justify-center h-12">
          <input
            type="text"
            value={newTeamName}
            onChange={(e) => setNewTeamName(e.target.value)}
            className="border p-2 rounded"
          />
          <button onClick={handleSave} className="bg-green-500 text-white p-2 rounded">
            Guardar
          </button>
          <button onClick={() => setIsEditing(false)} className="bg-red-500 text-white p-2 rounded">
            Cancelar
          </button>
        </div>
      ) : (
        <div className="text-5xl font-bold relative">
          {teamName}
          <button onClick={() => setIsEditing(true)} className="text-gray-600 absolute ml-2">
            <FaEdit size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamNameEditor;

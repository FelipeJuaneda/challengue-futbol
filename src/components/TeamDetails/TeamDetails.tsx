import React, { useEffect, useState } from "react";
import { Player, Team } from "@/types";
import TeamNameEditor from "./TeamNameEditor";
import TeamSelectors from "./TeamSelectors";
import PlayerList from "../PlayerList";
import { toast } from "sonner";
import PlayersActions from "./PlayerActions";
import NotificationModal from "./NotificationModal";

interface TeamDetailsProps {
  team: Team;
  teams: Team[];
  addPlayerToTeam: (teamId: string, player: Player) => void;
  removePlayerFromTeam: (teamId: string, playerId: string) => void;
  editTeamName: (teamId: string, newName: string) => void;
  areTeamsComplete: boolean;
}

const TeamDetails: React.FC<TeamDetailsProps> = ({
  team,
  teams,
  addPlayerToTeam,
  removePlayerFromTeam,
  editTeamName,
  areTeamsComplete,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedLeague, setSelectedLeague] = useState<string>("");
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    if (areTeamsComplete) {
      setModalMessage("¡Ambos equipos están completos!");
      setIsModalOpen(true);
    }
  }, [areTeamsComplete]);

  const handleSelectPlayer = (player: Player) => {
    const isPlayerInAnyTeam = teams.some((team) =>
      team.players.some((p) => p.player_id === player.player_id)
    );
    if (isPlayerInAnyTeam) {
      toast.warning("El jugador ya está en un equipo.");
      return;
    }
    if (team.players.length < 5) {
      addPlayerToTeam(team.id, player);
      toast.success(
        `${player.player_name} ha sido agregado a ${team.team_name}`
      );
    } else {
      setModalMessage(
        "No puedes agregar más jugadores. Tu equipo ya está completo."
      );
      setIsModalOpen(true);
    }
  };

  const handleRemovePlayer = (playerId: string, playerName: string) => {
    removePlayerFromTeam(team.id, playerId);
    toast.success(`${playerName} ha sido eliminado de ${team.team_name}`);
  };

  return (
    <div className="p-4">
      <TeamNameEditor
        teamId={team.id}
        teamName={team.team_name}
        onSave={editTeamName}
      />
      <TeamSelectors
        selectedCountry={selectedCountry}
        selectedLeague={selectedLeague}
        onCountrySelect={setSelectedCountry}
        onLeagueSelect={setSelectedLeague}
        onTeamSelect={setSelectedTeam}
      />
      {selectedTeam && (
        <div className="my-4">
          <PlayerList
            players={selectedTeam.players}
            onSelectPlayer={handleSelectPlayer}
          />
        </div>
      )}
      <PlayersActions
        team={team}
        isOpen={isDrawerOpen}
        onOpen={() => setIsDrawerOpen(true)}
        onClose={() => setIsDrawerOpen(false)}
        handleRemovePlayer={handleRemovePlayer}
      />
      <NotificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message={modalMessage}
        teams={teams}
        areTeamsComplete={areTeamsComplete}
      />
    </div>
  );
};

export default TeamDetails;

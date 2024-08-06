"use client";

import { useRouter } from "next/router";
import React from "react";
import { useTeams } from "../../context/TeamsContext";
import TeamDetails from "../../components/TeamDetails/TeamDetails";
import Header from "../../components/Header";

const TeamPage: React.FC = () => {
  const router = useRouter();
  const { teamId } = router.query as { teamId: string };
  const {
    teams,
    addPlayerToTeam,
    removePlayerFromTeam,
    editTeamName,
    areTeamsComplete,
  } = useTeams();

  const team = teams.find((t) => t.id === teamId);

  if (!team) {
    return <div>Equipo no encontrado</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <TeamDetails
          team={team}
          teams={teams}
          addPlayerToTeam={addPlayerToTeam}
          removePlayerFromTeam={removePlayerFromTeam}
          areTeamsComplete={areTeamsComplete}
          editTeamName={editTeamName}
        />
      </div>
    </div>
  );
};

export default TeamPage;

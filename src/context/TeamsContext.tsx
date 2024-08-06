"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Team, Player } from "../types";

interface TeamsContextProps {
  teams: Team[];
  addTeam: () => void;
  editTeamName: (id: string, newName: string) => void;
  deleteTeam: (id: string) => void;
  addPlayerToTeam: (teamId: string, player: Player) => void;
  removePlayerFromTeam: (teamId: string, playerId: string) => void;
  areTeamsComplete: boolean;
}

const TeamsContext = createContext<TeamsContextProps | undefined>(undefined);

const TeamsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [areTeamsComplete, setAreTeamsComplete] = useState<boolean>(false);

  useEffect(() => {
    const storedTeams = localStorage.getItem("teams");
    if (storedTeams) {
      setTeams(JSON.parse(storedTeams));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
    checkTeamsComplete();
  }, [teams]);

  const getNextTeamName = (): string => {
    const existingNumbers = teams.map((team) =>
      parseInt(team.team_name.split(" ")[1], 10)
    );
    let nextNumber = 1;
    while (existingNumbers.includes(nextNumber)) {
      nextNumber++;
    }
    return `Equipo ${nextNumber}`;
  };

  const addTeam = () => {
    if (teams.length >= 2) {
      return;
    }
    const newTeam: Team = {
      id: Date.now().toString(),
      team_key: Date.now().toString(),
      team_name: getNextTeamName(),
      players: [],
      team_badge: "",
    };
    const newTeams = [...teams, newTeam].sort((a, b) => {
      const aNumber = parseInt(a.team_name.split(" ")[1], 10);
      const bNumber = parseInt(b.team_name.split(" ")[1], 10);
      return aNumber - bNumber;
    });
    setTeams(newTeams);
  };

  const editTeamName = (id: string, newName: string) => {
    setTeams(
      teams.map((team) =>
        team.id === id ? { ...team, team_name: newName } : team
      )
    );
  };

  const deleteTeam = (id: string) => {
    setTeams(teams.filter((team) => team.id !== id));
  };

  const addPlayerToTeam = (teamId: string, player: Player) => {
    const isPlayerInAnyTeam = teams.some((team) =>
      team.players.some((p) => p.player_id === player.player_id)
    );

    if (!isPlayerInAnyTeam) {
      setTeams(
        teams.map((team) =>
          team.id === teamId && team.players.length < 5
            ? { ...team, players: [...team.players, player] }
            : team
        )
      );
    }
  };

  const removePlayerFromTeam = (teamId: string, playerId: string) => {
    setTeams(
      teams.map((team) =>
        team.id === teamId
          ? {
              ...team,
              players: team.players.filter(
                (player) => player.player_id !== playerId
              ),
            }
          : team
      )
    );
  };

  const checkTeamsComplete = () => {
    const allTeamsComplete =
      teams.length === 2 && teams.every((team) => team.players.length === 5);
    setAreTeamsComplete(allTeamsComplete);
  };

  return (
    <TeamsContext.Provider
      value={{
        teams,
        addTeam,
        editTeamName,
        deleteTeam,
        addPlayerToTeam,
        removePlayerFromTeam,
        areTeamsComplete,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

export const useTeams = () => {
  const context = useContext(TeamsContext);
  if (!context) {
    throw new Error("useTeams must be used within a TeamsProvider");
  }
  return context;
};

export default TeamsProvider;

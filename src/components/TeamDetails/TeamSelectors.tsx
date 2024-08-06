import React from "react";
import CountrySelector from "../CountrySelector";
import LeagueSelector from "../LeagueSelector";
import TeamSelector from "../TeamSelector";
import { Team } from "@/types";

interface TeamSelectorsProps {
  selectedCountry: string;
  selectedLeague: string;
  onCountrySelect: (countryId: string) => void;
  onLeagueSelect: (leagueId: string) => void;
  onTeamSelect: (team: Team) => void;
}

const TeamSelectors: React.FC<TeamSelectorsProps> = ({
  selectedCountry,
  selectedLeague,
  onCountrySelect,
  onLeagueSelect,
  onTeamSelect,
}) => {
  return (
    <>
      <div className="my-4">
        <CountrySelector onSelectCountry={onCountrySelect} />
      </div>
      {selectedCountry && (
        <div className="my-4">
          <LeagueSelector countryId={selectedCountry} onSelectLeague={onLeagueSelect} />
        </div>
      )}
      {selectedLeague && (
        <div className="my-4">
          <TeamSelector leagueId={selectedLeague} onSelectTeam={onTeamSelect} />
        </div>
      )}
    </>
  );
};

export default TeamSelectors;

import React, { useEffect, useState } from "react";
import Select, { components, SingleValue, ActionMeta } from "react-select";
import { Team } from "@/types";
import { fetchTeams } from "@/utils/api";
import Image from "next/image";

interface TeamSelectorProps {
  leagueId: string;
  onSelectTeam: (team: Team) => void;
}

interface OptionType {
  value: string;
  label: string;
  logo: string;
}

const TeamSelector: React.FC<TeamSelectorProps> = ({
  leagueId,
  onSelectTeam,
}) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [options, setOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const loadTeams = async () => {
      if (leagueId) {
        const teamsData = await fetchTeams(leagueId);
        setTeams(teamsData);
        const formattedOptions = teamsData.map((team: Team) => ({
          value: team.team_key,
          label: team.team_name,
          logo: team.team_badge,
        }));
        setOptions(formattedOptions);
      }
    };

    loadTeams();
  }, [leagueId]);

  const handleChange = (
    newValue: SingleValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => {
    if (newValue) {
      const selectedTeam = teams.find(
        (team) => team.team_key === newValue.value
      );
      if (selectedTeam) {
        onSelectTeam(selectedTeam);
      }
    }
  };

  const CustomOption = (props: any) => (
    <components.Option {...props}>
      <div className="flex items-center">
        <Image
          src={props.data.logo || "https://via.placeholder.com/20"}
          alt={props.data.label || `Logo de ${props.data.label}`}
          width={20}
          height={20}
          className="mr-2 w-5 h-5"
          loading="lazy"
        />
        <span>{props.data.label}</span>
      </div>
    </components.Option>
  );

  const CustomSingleValue = (props: any) => (
    <components.SingleValue {...props}>
      <div className="flex items-center">
        <Image
          src={props.data.logo || "https://via.placeholder.com/20"}
          alt={props.data.label || `Logo de ${props.data.label}`}
          width={20}
          height={20}
          className="mr-2 w-5 h-5"
          loading="lazy"
        />
        <span>{props.data.label}</span>
      </div>
    </components.SingleValue>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold">Seleccionar Equipo</h2>
      <Select
        options={options}
        onChange={handleChange}
        placeholder="Seleccione un equipo..."
        className="mt-2"
        components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
      />
    </div>
  );
};

export default TeamSelector;

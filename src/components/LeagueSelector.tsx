import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import { fetchLeagues } from "@/utils/api";
import Image from "next/image";

interface LeagueSelectorProps {
  countryId: string;
  onSelectLeague: (leagueId: string) => void;
}

const LeagueSelector: React.FC<LeagueSelectorProps> = ({
  countryId,
  onSelectLeague,
}) => {
  const [leagues, setLeagues] = useState<any[]>([]);
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    const loadLeagues = async () => {
      if (countryId) {
        const leaguesData = await fetchLeagues(countryId);
        setLeagues(leaguesData);
        setOptions(
          leaguesData.map((league: any) => ({
            value: league.league_id,
            label: league.league_name,
            logo: league.league_logo,
          }))
        );
      }
    };

    loadLeagues();
  }, [countryId]);

  const handleChange = (selectedOption: any) => {
    if (selectedOption) {
      onSelectLeague(selectedOption.value);
    }
  };

  const customOption = (props: any) => {
    return (
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
  };

  const customSingleValue = (props: any) => {
    return (
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
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Seleccionar Competencia</h2>
      <Select
        options={options}
        onChange={handleChange}
        placeholder="Seleccione una competencia..."
        className="mt-2"
        components={{ Option: customOption, SingleValue: customSingleValue }}
      />
    </div>
  );
};

export default LeagueSelector;

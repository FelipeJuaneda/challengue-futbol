import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import { fetchCountries } from "@/utils/api";
import Image from "next/image";

interface CountrySelectorProps {
  onSelectCountry: (countryId: string) => void;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({
  onSelectCountry,
}) => {
  const [countries, setCountries] = useState<any[]>([]);
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
      setOptions(
        countries.map((country: any) => ({
          value: country.country_id,
          label: country.country_name,
          logo: country.country_logo,
        }))
      );
    };

    loadCountries();
  }, []);

  const handleChange = (selectedOption: any) => {
    onSelectCountry(selectedOption.value);
  };

  const customOption = (props: any) => {
    return (
      <components.Option {...props}>
        <div className="flex items-center">
          <Image
            src={props.data.logo || "https://via.placeholder.com/20"}
            alt={props.data.label || `Bandera de ${props.data.label}`}
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
            alt={props.data.label || `Bandera de ${props.data.label}`}
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
      <h2 className="text-2xl font-bold">Seleccionar País</h2>
      <Select
        options={options}
        onChange={handleChange}
        placeholder="Seleccione un país..."
        className="mt-2"
        components={{ Option: customOption, SingleValue: customSingleValue }}
      />
    </div>
  );
};

export default CountrySelector;

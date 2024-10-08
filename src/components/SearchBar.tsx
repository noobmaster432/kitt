import React from "react";
import { FaSearch } from "react-icons/fa";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { IconType } from "react-icons";
import { airports } from "@/utils/data";

interface IconProps {
  icon: IconType;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, className }) => {
  const IconWithProps = IconComponent as React.ComponentType<{
    className?: string;
  }>;
  return <IconWithProps className={className} />;
};

interface SearchBarProps {
  fromAirport: string;
  toAirport: string;
  departureDate: string;
  returnDate: string;
  onFromAirportChange: (value: string) => void;
  onToAirportChange: (value: string) => void;
  onDepartureDateChange: (value: string) => void;
  onReturnDateChange: (value: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  fromAirport,
  toAirport,
  departureDate,
  returnDate,
  onFromAirportChange,
  onToAirportChange,
  onDepartureDateChange,
  onReturnDateChange,
  onSearch,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full max-w-4xl bg-white border border-gray-200 rounded-lg p-2">
      <select
        className="w-full sm:w-auto sm:flex-grow text-xs pl-6 pr-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={fromAirport}
        onChange={(e) => onFromAirportChange(e.target.value)}
      >
        <option value="">Where From?</option>
        {airports.map((airport) => (
          <option key={airport.code} value={airport.code}>
            {airport.city} ({airport.code})
          </option>
        ))}
      </select>

      <button className="p-1 rounded-full bg-gray-200">
        <Icon
          icon={TbArrowsDoubleNeSw}
          className="text-gray-600 transform rotate-45 text-xs"
        />
      </button>

      <select
        className="w-full sm:w-auto sm:flex-grow text-xs pl-6 pr-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={toAirport}
        onChange={(e) => onToAirportChange(e.target.value)}
      >
        <option value="">Where To?</option>
        {airports.map((airport) => (
          <option key={airport.code} value={airport.code}>
            {airport.city} ({airport.code})
          </option>
        ))}
      </select>

      <div className="flex w-full sm:w-auto sm:flex-grow space-x-2">
        <input
          type="date"
          className="w-1/2 sm:w-auto sm:flex-grow text-xs px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={departureDate}
          onChange={(e) => onDepartureDateChange(e.target.value)}
        />

        <input
          type="date"
          className="w-1/2 sm:w-auto sm:flex-grow text-xs px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={returnDate}
          onChange={(e) => onReturnDateChange(e.target.value)}
        />
      </div>

      <button
        className="w-full sm:w-auto flex items-center justify-center px-4 py-1 bg-[#003E39] text-white text-xs rounded-md hover:bg-[#002b28] transition-colors"
        onClick={onSearch}
      >
        <Icon icon={FaSearch} className="mr-1" />
        Search
      </button>
    </div>
  );
};

export default SearchBar;

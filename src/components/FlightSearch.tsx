"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { MdMyLocation } from "react-icons/md";
import { IconBaseProps, IconType } from "react-icons";
import { airports } from "@/utils/data";
import FlightSearchResults from "./FlightSearchResult";

interface IconProps extends IconBaseProps {
  icon: IconType;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, ...props }) => {
  return <IconComponent {...props} />;
};

interface Airport {
  name: string;
  code: string;
  city: string;
  country: string;
}

const FlightSearch: React.FC = () => {
  const [fromAirport, setFromAirport] = useState<string>("");
  const [toAirport, setToAirport] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {!showResults ? (
        <>
          <h1
            className="text-4xl mb-8 text-center"
            style={{ fontFamily: "Neue Montreal, sans-serif" }}
          >
            Good afternoon, Brian
          </h1>
          <div className="flex flex-col space-y-2 w-full max-w-4xl">
            <div className="flex justify-between items-center">
              <button className="px-5 py-1 rounded-md bg-gray-200 text-black">
                Flights
              </button>
            </div>

            <div className="flex flex-wrap justify-between items-end gap-4 w-full">
              <div className="relative flex-grow">
                <Icon
                  icon={MdMyLocation}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <select
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={fromAirport}
                  onChange={(e) => setFromAirport(e.target.value)}
                >
                  <option value="">Where from?</option>
                  {airports.map((airport: Airport) => (
                    <option key={airport.code} value={airport.code}>
                      {airport.city} ({airport.code})
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-gray-200 p-2 rounded-full">
                <Icon
                  icon={TbArrowsDoubleNeSw}
                  className="text-gray-600 transform rotate-45"
                />
              </div>

              <div className="relative flex-grow">
                <Icon
                  icon={MdMyLocation}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <select
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={toAirport}
                  onChange={(e) => setToAirport(e.target.value)}
                >
                  <option value="">Where to?</option>
                  {airports.map((airport: Airport) => (
                    <option key={airport.code} value={airport.code}>
                      {airport.city} ({airport.code})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-grow">
                <label className="block text-xs text-gray-600 mb-1">
                  Departure
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>

              <div className="flex-grow">
                <label className="block text-xs text-gray-600 mb-1">
                  Return
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end items-center">
              <button
                className="flex items-center justify-center px-8 py-3 mt-3 bg-[#003E39] text-white rounded-md hover:bg-[#002b28] transition-colors"
                onClick={handleSearch}
              >
                <Icon icon={FaSearch} className="mr-2" />
                Search Flights
              </button>
            </div>
          </div>
        </>
      ) : (
        <FlightSearchResults
          fromAirport={fromAirport}
          toAirport={toAirport}
          departureDate={departureDate}
          returnDate={returnDate}
        />
      )}
    </div>
  );
};

export default FlightSearch;

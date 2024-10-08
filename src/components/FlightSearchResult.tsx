import React, { useState, useEffect } from "react";
import Image from "next/image";
import planegif from "./plane.gif";
import { airports } from "@/utils/data";
import { FaSearch } from "react-icons/fa";
import { Skeleton } from "./ui/skeleton";
import FlightDataDisplay from "./FlightDataDisplay";
import SearchBar from "./SearchBar";

interface Airport {
  name: string;
  code: string;
  city: string;
  country: string;
}

interface FlightSearchResultsProps {
  fromAirport: string;
  toAirport: string;
  departureDate: string;
  returnDate: string;
}

interface SearchProgressState {
  progress: number;
  isSearching: boolean;
}

const FlightSearchResults: React.FC<FlightSearchResultsProps> = ({
  fromAirport,
  toAirport,
  departureDate,
  returnDate,
}) => {
  const [searchState, setSearchState] = useState<SearchProgressState>({
    progress: 0,
    isSearching: true,
  });

  const [searchParams, setSearchParams] = useState({
    fromAirport,
    toAirport,
    departureDate,
    returnDate,
  });

  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    startSearch();
  }, []);

  const startSearch = () => {
    setSearchState({ progress: 0, isSearching: true });
    const timer = setInterval(() => {
      setSearchState((prevState) => {
        if (prevState.progress >= 100) {
          clearInterval(timer);
          return { progress: 100, isSearching: false };
        }
        return {
          progress: prevState.progress + 1,
          isSearching: true,
        };
      });
    }, 50);

    return () => clearInterval(timer);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const getAirportDetails = (code: string): Airport | undefined => {
    return airports.find((airport) => airport.code === code);
  };

  const renderAirportInfo = (code: string) => {
    const airport = getAirportDetails(code);
    return airport ? (
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold">{airport.code}</span>
        <span className="text-xs text-gray-600">{airport.city}</span>
      </div>
    ) : (
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold">{code}</span>
        <span className="text-xs text-gray-600">Unknown</span>
      </div>
    );
  };

  const handleSearch = () => {
    setShowSearchBar(false);
    startSearch();
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white p-4 w-full">
      {!showSearchBar ? (
        <div
          onClick={toggleSearchBar}
          className="w-full max-w-md bg-white border border-gray-200 rounded-3xl p-2"
        >
          <div className="flex flex-row items-center justify-between space-x-4 ml-2">
            {renderAirportInfo(searchParams.fromAirport)}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            {renderAirportInfo(searchParams.toAirport)}
            <div className="flex items-center text-xs  text-gray-600 mr-4">
              <span>
                {formatDate(searchParams.departureDate)} -{" "}
                {formatDate(searchParams.returnDate)}
              </span>
              <button className="ml-4 h-4 w-4 mt-1">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <SearchBar
          fromAirport={searchParams.fromAirport}
          toAirport={searchParams.toAirport}
          departureDate={searchParams.departureDate}
          returnDate={searchParams.returnDate}
          onFromAirportChange={(value) =>
            setSearchParams((prev) => ({ ...prev, fromAirport: value }))
          }
          onToAirportChange={(value) =>
            setSearchParams((prev) => ({ ...prev, toAirport: value }))
          }
          onDepartureDateChange={(value) =>
            setSearchParams((prev) => ({ ...prev, departureDate: value }))
          }
          onReturnDateChange={(value) =>
            setSearchParams((prev) => ({ ...prev, returnDate: value }))
          }
          onSearch={handleSearch}
        />
      )}

      <div className="w-full mb-4">
        <div className="flex mb-1 items-center justify-between">
          <span className="text-xs font-semibold text-[#003E39]">Progress</span>
          <span className="text-xs font-semibold text-[#003E39]">
            {searchState.progress}%
          </span>
        </div>
        <div className="overflow-hidden h-1 mb-2 text-xs flex rounded bg-[#06847a]">
          <div
            style={{ width: `${searchState.progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#003E39] transition-[width] duration-500 ease-out"
          ></div>
        </div>
      </div>

      {searchState.isSearching ? (
        <>
          <div className="w-70 h-70 mt-[4rem] bg-white border border-gray-200 rounded-lg p-6 shadow-lg flex flex-col items-center justify-center z-10">
            <div className="w-32 h-32 relative">
              <Image
                src={planegif}
                alt="Loading animation"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <div className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <p className="text-lg font-semibold text-gray-400">
                  Searching 400+ flights
                </p>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                Attaching company rules
              </p>
              <p className="text-sm text-gray-600">Serving best results</p>
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col space-y-4 p-4 mt-[6rem]">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="w-full h-32" />
            ))}
          </div>
        </>
      ) : (
        <FlightDataDisplay
          fromAirport={searchParams.fromAirport}
          toAirport={searchParams.toAirport}
          departureDate={searchParams.departureDate}
          returnDate={searchParams.returnDate}
        />
      )}
    </div>
  );
};

export default FlightSearchResults;

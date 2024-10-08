import React, { useState } from "react";
import Image from "next/image";
import { flights } from "@/utils/data";
import FlightDetailsSlideIn from "./FlightDetailsSlideIn";

interface FlightDataDisplayProps {
  fromAirport: string;
  toAirport: string;
  departureDate: string;
  returnDate: string;
}

interface FlightOption {
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  price: number;
  image: string;
}

const FlightDataDisplay: React.FC<FlightDataDisplayProps> = ({
  fromAirport,
  toAirport,
  departureDate,
  returnDate,
}) => {
  const flightOptions = flights
    .filter(
      (f) =>
        (f.from === "*" || f.from === fromAirport) &&
        (f.to === "*" || f.to === toAirport)
    )
    .flatMap((f) => f.options as FlightOption[]);

  const [selectedFlights, setSelectedFlights] = useState<FlightOption[]>([]);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const renderFlightCard = (flight: FlightOption, index: number) => (
    <div key={index} className="flex flex-col">
      <p className="text-[9px] text-gray-400 mb-1">
        {index % 2 === 0 ? departureDate : returnDate}
      </p>
      <div className="flex">
        <div className="flex w-4/5">
          <Image
            src={flight.image}
            alt={flight.airline}
            width={40}
            height={40}
            className="mr-2"
          />
          <div className="ml-2">
            <p className="text-[11px] text-gray-500">
              {flight.airline} {flight.flightNumber}
            </p>
            <p className="text-md text-black">
              {flight.departureTime} - {flight.arrivalTime}
            </p>
          </div>
          <div className="ml-[8rem] hidden sm:block">
            <p className="text-[11px] text-gray-500">
              {fromAirport}-{toAirport}
            </p>
            <p className="text-md text-black">
              {flight.duration}
              <span className="ml-[3rem] mb-2">
                {flight.stops === 0 ? "Non Stop" : `${flight.stops} Stop`}
              </span>
            </p>
          </div>
          <div className="ml-auto sm:hidden">
            <p className="text-[11px] text-gray-500">
              {fromAirport}-{toAirport}
            </p>
            <p className="text-md text-black">
              {flight.duration}
              <span className="ml-2 mb-2">
                {flight.stops === 0 ? "Non Stop" : `${flight.stops} Stop`}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const handleSelectFlight = (flight1: FlightOption, flight2: FlightOption) => {
    setSelectedFlights([flight1, flight2]);
    setIsDetailsOpen(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <p className="text-left mb-4">
        {flightOptions.length} results out of 756
      </p>
      {flightOptions.length > 0 ? (
        flightOptions.reduce((acc: JSX.Element[], flight, index) => {
          if (index % 2 === 0) {
            acc.push(
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 mb-4 flex flex-col sm:flex-row"
              >
                <div className="w-full sm:w-4/5 space-y-6">
                  {renderFlightCard(flight, index)}
                  {flightOptions[index + 1] &&
                    renderFlightCard(flightOptions[index + 1], index + 1)}
                </div>
                <div className="w-full sm:w-1/5 border-t sm:border-t-0 sm:border-l border-gray-200 pt-4 sm:pt-0 sm:pl-4 mt-4 sm:mt-0 flex flex-row sm:flex-col justify-between sm:justify-start">
                  <p className="text-[11px] text-gray-500 md:mt-4">from</p>
                  <p className="">AED {flight.price.toFixed(2)}</p>
                  <button
                    className="bg-[#003E39] text-white px-4 py-1 rounded-lg text-sm sm:mt-2"
                    onClick={() =>
                      handleSelectFlight(flight, flightOptions[index + 1])
                    }
                  >
                    Select
                  </button>
                </div>
              </div>
            );
          }
          return acc;
        }, [])
      ) : (
        <p className="text-center text-gray-600">
          No flights found for the selected route.
        </p>
      )}

      <FlightDetailsSlideIn
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        flightDetails={selectedFlights}
        departureDate={departureDate}
        returnDate={returnDate}
        fromAirport={fromAirport}
        toAirport={toAirport}
      />
    </div>
  );
};

export default FlightDataDisplay;

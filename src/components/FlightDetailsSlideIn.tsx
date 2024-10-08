import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import Image from 'next/image';

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

interface FlightDetailsSlideInProps {
  isOpen: boolean;
  onClose: () => void;
  flightDetails: FlightOption[];
  departureDate: string;
  returnDate: string;
  fromAirport: string;
  toAirport: string;
}

const FlightDetailsSlideIn: React.FC<FlightDetailsSlideInProps> = ({
  isOpen,
  onClose,
  flightDetails,
  departureDate,
  returnDate,
  fromAirport,
  toAirport
}) => {
  if (!isOpen) return null;

  const renderFlightProgress = (flight: FlightOption, date: string, direction: 'outbound' | 'inbound') => (
    <div className="mb-6 flex justify-between">
      
      <div className="flex flex-col items-center mr-4">
        <div className="w-2 h-2 rounded-full bg-[#003E39]"></div>
        <div className="h-12 bg-[#003E39] w-0.5 mt-2"></div>
        <div className="w-2 h-2 rounded-full bg-[#003E39]"></div>
      </div>
      
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">{date}</p>
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-xs">{flight.departureTime}</p>
            <p className="text-xs">{direction === 'outbound' ? fromAirport : toAirport}</p>
          </div>
          <div className="text-center">
            <p className="text-xs">{flight.duration}</p>
            <p className="text-xs text-gray-500">{flight.stops === 0 ? 'Non Stop' : `${flight.stops} Stop`}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-xs">{flight.arrivalTime}</p>
            <p className="text-xs">{direction === 'outbound' ? toAirport : fromAirport}</p>
          </div>
        </div>
        
        <div className="flex items-center mt-2 justify-end">
          <div className="text-right mr-2">
            <p className="text-xs text-gray-500">{flight.airline} {flight.flightNumber}</p>
          </div>
          <Image src={flight.image} alt={flight.airline} width={40} height={40} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-1/2 bg-white shadow-lg z-50 transition-transform duration-300 transform translate-x-0">
      <div className="p-4">
        <div className="mb-4">
          <button onClick={onClose} className="text-lg mb-2">
            <IoMdArrowBack />
          </button>

          <h2 className="text-lg mt-2">Flight Details</h2>
        </div>
        <hr className="mb-4" />

        {renderFlightProgress(flightDetails[0], departureDate, "outbound")}
        {flightDetails[1] &&
          renderFlightProgress(flightDetails[1], returnDate, "inbound")}

        <div className="mt-4">
          <h3 className="text-base font-semibold mb-2">Price Details</h3>
          <p className="text-xl">AED {flightDetails[0].price.toFixed(2)}</p>
          <p className="text-sm text-gray-500">Total price for all travelers</p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 px-4 bg-[#003E39] text-white py-3 rounded-lg text-sm items-center"
        >
          Continue to Book
        </button>
      </div>
    </div>
  );
};

export default FlightDetailsSlideIn;
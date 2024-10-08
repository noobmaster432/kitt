export const airports = [
    {
      name: "Indira Gandhi International Airport",
      code: "DEL",
      city: "New Delhi",
      country: "India"
    },
    {
      name: "Chhatrapati Shivaji Maharaj International Airport",
      code: "BOM",
      city: "Mumbai",
      country: "India"
    },
    {
      name: "John F. Kennedy International Airport",
      code: "JFK",
      city: "New York",
      country: "United States"
    },
    {
      name: "Dubai International Airport",
      code: "DXB",
      city: "Dubai",
      country: "United Arab Emirates"
    },
    {
      name: "Heathrow Airport",
      code: "LHR",
      city: "London",
      country: "United Kingdom"
    },
    {
      name: "Singapore Changi Airport",
      code: "SIN",
      city: "Singapore",
      country: "Singapore"
    },
    {
      name: "Los Angeles International Airport",
      code: "LAX",
      city: "Los Angeles",
      country: "United States"
    },
    {
      name: "Beijing Capital International Airport",
      code: "PEK",
      city: "Beijing",
      country: "China"
    },
    {
      name: "Sydney Kingsford Smith International Airport",
      code: "SYD",
      city: "Sydney",
      country: "Australia"
    },
    {
      name: "Tokyo Haneda Airport",
      code: "HND",
      city: "Tokyo",
      country: "Japan"
    }
];

export const flights = [
    {
      from: "*",
      to: "*",
      options: [
        {
          airline: "Emirates",
          flightNumber: "EK 74",
          departureTime: "14:30 AM",
          arrivalTime: "23:45 AM",
          duration: "6h 15m",
          stops: 0,
          price: 2456.90,
          currency: "AED",
          image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg",
          from: "DXB",
          to: "LHR"
        },
        {
          airline: "Air France",
          flightNumber: "AF 662",
          departureTime: "13:45 AM",
          arrivalTime: "22:55 AM",
          duration: "6h 10m",
          stops: 0,
          price: 2456.90,
          currency: "AED",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Air_France_Logo.svg",
          from: "CDG",
          to: "JFK"
        },
        {
          airline: "Etihad Airways",
          flightNumber: "EY 32",
          departureTime: "10:30 AM",
          arrivalTime: "19:55 AM",
          duration: "6h 25m",
          stops: 0,
          price: 2589.00,
          currency: "AED",
          image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Etihad-airways-logo.svg",
          from: "AUH",
          to: "SIN"
        },
        {
          airline: "Qatar Airways",
          flightNumber: "QR 40",
          departureTime: "08:15 AM",
          arrivalTime: "18:30 AM",
          duration: "7h 15m",
          stops: 1,
          stopover: "DOH",
          price: 2345.50,
          currency: "AED",
          image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/1200px-Qatar_Airways_Logo.svg.png",
          from: "DOH",
          to: "LAX"
        },
        {
          airline: "Lufthansa",
          flightNumber: "LH 630",
          departureTime: "11:20 AM",
          arrivalTime: "21:45 AM",
          duration: "7h 25m",
          stops: 1,
          stopover: "FRA",
          price: 2678.75,
          currency: "AED",
          image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg",
          from: "FRA",
          to: "PEK"
        },
        {
          airline: "Turkish Airlines",
          flightNumber: "TK 1822",
          departureTime: "07:05 AM",
          arrivalTime: "18:20 AM",
          duration: "8h 15m",
          stops: 1,
          stopover: "IST",
          price: 2234.00,
          currency: "AED",
          image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Turkish_Airlines_logo_2019_compact.svg",
          from: "IST",
          to: "SYD"
        },
        {
          airline: "KLM Royal Dutch Airlines",
          flightNumber: "KL 429",
          departureTime: "09:30 AM",
          arrivalTime: "20:15 AM",
          duration: "7h 45m",
          stops: 1,
          stopover: "AMS",
          price: 2567.80,
          currency: "AED",
          image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/KLM_logo.svg",
          from: "AMS",
          to: "HND"
        },
        {
          airline: "Swiss International Air Lines",
          flightNumber: "LX 2382",
          departureTime: "12:40 AM",
          arrivalTime: "23:55 AM",
          duration: "8h 15m",
          stops: 1,
          stopover: "ZRH",
          price: 2789.60,
          currency: "AED",
          image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Swiss_International_Air_Lines_Logo_2011.svg",
          from: "ZRH",
          to: "DEL"
        },
        {
          airline: "Oman Air",
          flightNumber: "WY 132",
          departureTime: "21:35 AM",
          arrivalTime: "09:15 AM",
          duration: "8h 40m",
          stops: 1,
          stopover: "MCT",
          price: 2123.45,
          currency: "AED",
          image: "https://upload.wikimedia.org/wikipedia/en/a/a0/Oman_Air_logo.svg",
          from: "MCT",
          to: "BOM"
        },
        {
          airline: "Saudia",
          flightNumber: "SV 126",
          departureTime: "15:50 AM",
          arrivalTime: "03:30 AM",
          duration: "8h 40m",
          stops: 1,
          stopover: "JED",
          price: 2345.67,
          currency: "AED",
          image: "https://upload.wikimedia.org/wikipedia/en/4/48/Logo_of_Saudia.svg",
          from: "JED",
          to: "FCO"
        }
      ]
    }
];
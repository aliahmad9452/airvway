// Airport search utilities
export interface Airport {
  iata: string;
  name: string;
  city: string;
  country: string;
  lat: number;
  lon: number;
}

interface AirportRawData {
  [key: string]: {
    icao: string;
    iata: string;
    name: string;
    city: string;
    state?: string;
    country: string;
    elevation: number;
    lat: number;
    lon: number;
  }
}

let airportsData: Airport[] | null = null;

// Load airports data
export const loadAirports = async (): Promise<Airport[]> => {
  if (!airportsData) {
    try {
      const response = await fetch('/assets/airports.json');
      const rawData: AirportRawData = await response.json();
      
      // Convert object to array and filter airports with valid IATA codes
      airportsData = Object.values(rawData)
        .filter(airport => airport.iata && airport.iata.length === 3)
        .map(airport => ({
          iata: airport.iata,
          name: airport.name,
          city: airport.city,
          country: airport.country,
          lat: airport.lat,
          lon: airport.lon
        }))
        .slice(0, 1000); // Limit to first 1000 airports for performance
      
    } catch (error) {
      console.error('Failed to load airports data:', error);
      airportsData = [];
    }
  }
  return airportsData || [];
};

// Search airports by query (name, city, country, or IATA code)
export const searchAirports = async (query: string, limit: number = 10): Promise<Airport[]> => {
  if (!query || query.length < 1) return [];
  
  const airports = await loadAirports();
  const lowercaseQuery = query.toLowerCase();
  
  return airports
    .filter((airport: Airport) => 
      airport.name.toLowerCase().includes(lowercaseQuery) ||
      airport.city.toLowerCase().includes(lowercaseQuery) ||
      airport.country.toLowerCase().includes(lowercaseQuery) ||
      airport.iata.toLowerCase().includes(lowercaseQuery)
    )
    .slice(0, limit);
};

// Get airport by IATA code
export const getAirportByIata = async (iataCode: string): Promise<Airport | undefined> => {
  const airports = await loadAirports();
  return airports.find((airport: Airport) => 
    airport.iata.toLowerCase() === iataCode.toLowerCase()
  );
};

// Get popular airports
export const getPopularAirports = async (): Promise<Airport[]> => {
  const airports = await loadAirports();
  const popularCodes = ['JFK', 'LAX', 'LHR', 'DXB', 'SIN', 'CDG', 'ATL', 'ORD'];
  
  return popularCodes
    .map(code => airports.find((airport: Airport) => airport.iata === code))
    .filter((airport): airport is Airport => airport !== undefined);
};
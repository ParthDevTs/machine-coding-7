import { data } from "../data/tripadvisorData";

const { createContext, useState, useContext } = require("react");

const TripContext = createContext();


export const TripProvider = ({ children }) => {

    const [tripData, setTripData] = useState(data.continents);





    return (<TripContext.Provider value={{
        tripData,
        setTripData,

    }}>{children}</TripContext.Provider>)
}

export const useTrip = () => useContext(TripContext)
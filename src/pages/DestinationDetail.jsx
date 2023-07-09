import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useTrip } from '../context/tripadvisorContext';

function DestinationDetail() {
    const { continentId, countryId, destinationId } = useParams();
    const { tripData } = useTrip();
    const navigate = useNavigate()

    const selectedContinent = tripData.find((continent) => continent.id === parseInt(continentId))
    const selectedCountry = selectedContinent.countries?.find(country => country.id === parseInt(countryId))
    const selectedDestination = selectedCountry.destinations.find(destination => destination.id === parseInt(destinationId))

    console.info(continentId, countryId, destinationId)

    return (
        <div className="bg-slate-800 text-white min-h-screen w-full flex flex-col gap-4 items-center justify-center relative">
            <button className="absolute top-10 left-5 bg-white shadow-lg shadow-white text-black px-4 py-2 rounded capitalize" onClick={() => navigate(-1)}>go back</button>
            <h1 className="captitalize text-5xl font-bold drop-shadow-lg">{selectedDestination.name}</h1>
            <div className="main__info bg-slate-900 gap-10 flex items-center justify-center px-20 py-10">
                <div className="image__area">
                    <img src={selectedDestination.image} className="h-[20rem] w-[20rem]" alt="" />
                </div>
                <div className="infoArea capitalize flex flex-col gap-5 items-start justify-evenly max-w-[30rem]">
                    <p>Description: {selectedDestination.description}</p>
                    <p>ratings: {selectedDestination.ratings}</p>
                    <p>reviews: {selectedDestination.reviews}</p>
                    <p>location: {selectedDestination.location}</p>
                    <p>openingHours: {selectedDestination.openingHours}</p>
                    <p>ticketPrice: {selectedDestination.ticketPrice}</p>
                    <a href={selectedDestination.website}>Website</a>

                </div>
            </div>

        </div>
    )
}

export default DestinationDetail
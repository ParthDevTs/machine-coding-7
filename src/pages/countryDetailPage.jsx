import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useTrip } from '../context/tripadvisorContext';

function CountryDetailPage() {
    const { continentId, countryId } = useParams();
    const { tripData } = useTrip();
    const navigate = useNavigate()


    const selectedContinent = tripData.find((continent) => continent.id === parseInt(continentId))
    const selectedCountry = selectedContinent.countries?.find(country => country.id = parseInt(countryId))

    return (
        <div className="bg-slate-800 text-white min-h-screen w-full flex flex-col gap-4 items-center justify-center relative">
            <button className="absolute top-10 left-5 bg-white shadow-lg shadow-white text-black px-4 py-2 rounded capitalize" onClick={() => navigate(-1)}>go back</button>
            <h1 className="captitalize text-2xl font-bold drop-shadow-lg">Top Destination in {selectedCountry.name} for your trip this year</h1>
            <div className="select_country  flex items-center justify-start gap-6 flex-wrap">
                {selectedCountry.destinations.map((destination) => {
                    return (<div key={destination.id} style={{ backgroundImage: `url(${destination.image})` }}
                        onClick={() => { navigate(`/continent/${continentId}/country/${countryId}/destination/${destination.id}`) }}
                        className="continent__box w-[10rem] h-[10rem] rounded-lg bg-cover bg-center cursor-pointer ">

                        <footer className="continentFooter ">
                            <div
                                className="continent__container rounded-lg flex flex-col py-2 items-baseline justify-start w-[10rem] h-[10rem] bg-black/30 px-2 shadow-inner ">
                                <div className="spacer flex-grow"></div>
                                <span className="flex text-sm items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                    </svg>
                                    <p>{destination.name}</p>
                                </span>
                            </div>
                        </footer>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default CountryDetailPage
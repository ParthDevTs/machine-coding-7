import React from 'react'
import { useTrip } from '../context/tripadvisorContext'
import Continent from '../components/continent'

function Home() {

    const { tripData } = useTrip()
    return (
        <div className="bg-slate-800 text-white min-h-screen w-full flex flex-col gap-4 items-center justify-center">
            <h1 className="captitalize text-5xl font-bold drop-shadow-lg">Welcome to trip advisor</h1>
            <p className="text-indigo-500 text-xl font-semibold">To Continents for your next holiday</p>

            <div className="continentData flex items-center justify-start gap-6">
                {tripData.map((continent) => {
                    return <Continent key={continent.id} continent={continent} />
                })}
            </div>
        </div>
    )
}

export default Home
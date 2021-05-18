import React, { useState, useEffect } from "react"
import SearchBox from './SearchBox';
import ResidentContainer from "./ResidentContainer"
import LocationInfo from "./LocationInfo"
import Pagination from "./Pagination"

function App() {

    const [queryTerm, setQueryTerm] = useState("");
    const [residents, setResidents] = useState([])
    const [location, setLocation] = useState("")
    const [firstData, setFirstData] = useState(true)
    const [rangeOfResidents, setRangeOfResidents] = useState([0, 9])
    const [sliceOfResidents, setSliceOfResidents] = useState([])

    //First random location
    useEffect(() => {
        const randomId = Math.round(Math.random() * 108)
        if (residents.length === 0 && firstData) {
            fetch(`https://rickandmortyapi.com/api/location/${randomId}`)
                .then(response => response.json())
                .then(data => {
                    setResidents(data.residents);
                    setLocation(data)
                })
                .catch(err => console.log(err))
        }
    }, [residents])


    // This handles all location by user querys
    useEffect(() => {
        if (queryTerm) {
            setFirstData(false)
            fetch(`https://rickandmortyapi.com/api/location/?name=${queryTerm}`)
                .then(response => response.json())
                .then(data => {
                    setResidents(data.results[0].residents);
                    setLocation(data.results[0])
                })
                .catch(err => console.log(err))
        }
    }, [queryTerm])


    useEffect(() => {
        if (residents) {
            setSliceOfResidents(residents.slice(rangeOfResidents[0], rangeOfResidents[1] + 1))
        }
    }, [rangeOfResidents, residents])

    //Maps all the Residents
    const list = sliceOfResidents.map(value => {
        return <ResidentContainer url={value} key={value.id} />
    })


    return (
        <div>
            <h1 className="title">Rick and Morty</h1>
            <div className="search-box-container">
                <SearchBox handleSearch={setQueryTerm} />
            </div>
            <div className="location-info-container">
                <LocationInfo location={location} />
            </div>
            <div className="residents-container">
                <Pagination numberOfResidents={residents.length} rangeOfResidents={setRangeOfResidents} />
                {list}
            </div>
        </div>
    );
}

export default App;
import React, { useState, useEffect } from "react"
import SearchBox from './SearchBox';
import ResidentContainer from "./ResidentContainer"
import LocationInfo from "./LocationInfo"
import Pagination from "./Pagination"
import Loader from './Loader'

function App() {

    const [queryTerm, setQueryTerm] = useState("");
    const [residents, setResidents] = useState([])
    const [location, setLocation] = useState("")
    const [firstData, setFirstData] = useState(false)
    const [showLocationInfo, setShowLocationInfo] = useState(false)
    const [rangeOfResidents, setRangeOfResidents] = useState([0, 7]) //SETTLE FIRST range of residents
    const [sliceOfResidents, setSliceOfResidents] = useState([])
    const [loading, setLoading] = useState(false);

    /* //First random location
    useEffect(() => {
        const randomId = Math.round(Math.random() * 108)
        if (residents.length === 0 && firstData) {
            console.log("EEEEEEEEEEOOOO")
            setLoading(true)
            fetch(`https://rickandmortyapi.com/api/location/${randomId}`)
                .then(response => response.json())
                .then(data => {
                    setResidents(data.residents);
                    setLocation(data)
                    setLoading(false)
                })
                .catch(
                    err => console.log(err),
                    setLoading(false)
                    )
        }
    }, [residents]) */


    // This handles all location by user querys
    useEffect(() => {
        if (queryTerm) {
            setShowLocationInfo(true)
            setLoading(true)
            setFirstData(false)
            fetch(`https://rickandmortyapi.com/api/location/?name=${queryTerm}`)
                .then(response => response.json())
                .then(data => {
                    setResidents(data.results[0].residents);
                    setLocation(data.results[0])
                    setLoading(false)
                })
                .catch(
                    err => console.log(err),
                    setLoading(false)
                    )
        }
    }, [queryTerm])


    useEffect(() => {
        if (residents) {
            setSliceOfResidents(residents.slice(rangeOfResidents[0], rangeOfResidents[1] + 1))
        }
    }, [rangeOfResidents, residents])

    //Maps all the Residents
    const list = sliceOfResidents.map(value => {
        return <ResidentContainer setLoading={setLoading} url={value} key={value.id} />
    })


    return (
        <div>
            <h1 className="title">Rick and Morty</h1>
            <div className="search-box-container">
                <SearchBox handleSearch={setQueryTerm} />
            </div>
            <div className="location-info-container">
                {showLocationInfo && <LocationInfo location={location} />}
            </div>
            <div className="residents-container">
                { !showLocationInfo &&
                     <h2 className="initial-text">SEARCH A RICK AND MORTY LOCATION TO SEE ALL OF ITS RESIDENTS </h2>}
                { showLocationInfo && <Pagination numberOfResidents={residents.length} rangeOfResidents={setRangeOfResidents} />}
                {loading && <div className="loading-container"><Loader /></div>}
                <div>
                    {list}
                </div>
            </div>
        </div>
    );
}

export default App;
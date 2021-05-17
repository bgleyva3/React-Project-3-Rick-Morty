import React, { useState, useEffect } from "react"
import SearchBox from './SearchBox';
import ResidentContainer from "./ResidentContainer"
import LocationInfo from "./LocationInfo"
import Pagination from "./Pagination"

function App() {

    const [queryTerm, setQueryTerm] = useState("");
    const [numOfResidents, setNumOfResidents] = useState(10);
    const [residents, setResidents] = useState([])
    const [location, setLocation] = useState("")
    const [firstData, setFirstData] = useState(true)
    const [rangeOfResidents, setRangeOfResidents] = useState([0, 9])

    //First random location
    useEffect(() => {
        const randomId = Math.round(Math.random() * 108)
        if (residents.length === 0 && firstData) {
            fetch(`https://rickandmortyapi.com/api/location/${randomId}`)
                .then(response => response.json())
                .then(data => {
                    setResidents(data.residents);
                    console.log(data.residents);
                    console.log(data.residents.length)
                    setLocation(data)
                    console.log(data);
                })
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
                    console.log(data.results[0].residents);
                    setLocation(data.results[0])
                    console.log(data.results[0])
                })
        }
    }, [queryTerm])


    //Maps all the Residents
    const list = residents.map(value => {
        return <ResidentContainer url={value} key={value.id} />
    })


    return (
        <div>
            <SearchBox handleSearch={setQueryTerm} />
            <LocationInfo location={location} />
            <Pagination numberOfResidents={residents.length} />
            {list}
        </div>
    );
}

export default App;
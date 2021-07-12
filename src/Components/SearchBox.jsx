import { useState } from "react"
import arrow from "../arrow.png"

const SearchBox = ({ handleSearch }) => {

    const [queryInput, setQueryInput] = useState("")
    const [showForm, setShowForm] = useState("search-box out-noAnim")
    const [showArrow, setShowArrow] = useState(true)

    return (
        <div>
            <div className={showForm}>
                <button className="close-form" onClick={() => setShowForm("search-box out")}>X</button>

                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleSearch(queryInput)
                }}>
                    <label htmlFor="location-input">Search Location</label>
                    <input id="location-input" placeholder="Enter location" onChange={(elem) => setQueryInput(elem.target.value)}></input>
                    <p>e.g., Earth, Nuptia, Squanch, ...</p>
                    <button id="search-button" type="submit" value="Search">Search</button>
                </form>
            </div>

            <div className="open-search-button">
                <button onClick={() => {setShowForm("search-box in"); setShowArrow(false)}}><i className="fas fa-search fa-lg"></i></button>
                {showArrow && <img className="arrow" src={arrow} />}
            </div>

        </div>
    )
}

export default SearchBox
import { useState } from "react"

const SearchBox = ({ handleSearch }) => {

    const [queryInput, setQueryInput] = useState("")
    const [showForm, setShowForm] = useState("search-box out-noAnim")

    return (
        <div>

            <div className={showForm}>
                <button onClick={() => setShowForm("search-box out")}>X</button>

                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleSearch(queryInput)
                }}>
                    <label htmlFor="location-input">Search Location</label>
                    <input id="location-input" placeholder="Enter location" onChange={(elem) => setQueryInput(elem.target.value)}></input>
                    <button id="search-button" type="submit" value="Search">Search</button>
                </form>
            </div>

            <div className="open-search-button">
                <button onClick={() => setShowForm("search-box in")}><i className="fas fa-search fa-lg"></i></button>
            </div>

        </div>
    )
}

export default SearchBox
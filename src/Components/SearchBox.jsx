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
                    <p>Search Location</p>
                    <input placeholder="Enter location" onChange={(elem) => setQueryInput(elem.target.value)}></input>
                    <button type="submit" value="Search">Search</button>
                </form>
            </div>

            <div className="open-search-button">
                <button onClick={() => setShowForm("search-box in")}><i class="fas fa-search fa-lg"></i></button>
            </div>

        </div>
    )
}

export default SearchBox
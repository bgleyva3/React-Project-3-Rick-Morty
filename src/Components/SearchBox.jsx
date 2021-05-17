import { useState } from "react"

const SearchBox = ({ handleSearch }) => {

    const [queryInput, setQueryInput] = useState("")
    const [showForm, setShowForm] = useState(false)

    return (
        <div>
            {
                showForm ?
                    <div className="search-box">
                        <button onClick={() => setShowForm(false)}>X</button>
                        <p>Search Location</p>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            handleSearch(queryInput)
                        }}>
                            <input placeholder="Enter location" onChange={(elem) => setQueryInput(elem.target.value)}></input>
                            <button type="submit" value="Search">Search</button>
                        </form>
                    </div>
                    :
                    <div className="open-search-button">
                        <button onClick={() => setShowForm(true)}><i class="fas fa-search fa-lg"></i></button>
                    </div>
            }
        </div>
    )
}

export default SearchBox
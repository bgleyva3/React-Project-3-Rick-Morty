import { useState } from "react"

const SearchBox = ({ handleSearch }) => {

    const [queryInput, setQueryInput] = useState("")

    return (
        <div className="search-box">
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSearch(queryInput)
            }}>
                <input placeholder="Enter location" onChange={(elem) => setQueryInput(elem.target.value)}></input>
                <input type="submit" value="Search"></input>
            </form>
        </div>
    )
}

export default SearchBox
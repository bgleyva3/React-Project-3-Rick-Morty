import { useState, useEffect } from "react"

const Pagination = ({ numberOfResidents, rangeOfResidents }) => {

    const [pages, setPages] = useState([])

    useEffect(() => {
        if (numberOfResidents) {
            const numberOfPages = Math.ceil(numberOfResidents / 8)
            const arrayOfPages = []
            for (let i = 1; i <= numberOfPages; i++) {
                arrayOfPages.push(i)
            }
            setPages(arrayOfPages)
        }
    }, [numberOfResidents])

    const rangeOfIndex = (e) => {
        const number = parseInt(e.target.textContent)
        const indexMin = (number - 1) * 8
        const indexMax = (number * 8) - 1
        const indexArray = [indexMin, indexMax]
        rangeOfResidents(indexArray)
    }

    return (
        <div className="button-page">
            {
                pages.map((page) => {
                    return (<button onClick={(e) => rangeOfIndex(e)}>{page}</button>)
                })
            }
        </div>
    )
}

export default Pagination
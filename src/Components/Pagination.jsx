import { useState, useEffect } from "react"

const Pagination = ({ numberOfResidents }) => {

    const [pages, setPages] = useState([])

    useEffect(() => {
        if (numberOfResidents) {
            const numberOfPages = Math.ceil(numberOfResidents / 10)
            const arrayOfPages = []
            for (let i = 1; i <= numberOfPages; i++) {
                arrayOfPages.push(i)
            }
            setPages(arrayOfPages)
            console.log(arrayOfPages)
        }
    }, [numberOfResidents])

    const rangeOfIndex = (e) => {
        const number = parseInt(e.target.textContent)
        const indexMin = (number - 1) * 10
        const indexMax = (number * 10) - 1
        const indexArray = [indexMin, indexMax]

    }

    return (
        <div>
            {
                pages.map((page) => {
                    return (<button onClick={(e) => rangeOfIndex(e)}>{page}</button>)
                })
            }
        </div>
    )
}

export default Pagination
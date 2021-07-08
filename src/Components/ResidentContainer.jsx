import React, { useState, useEffect } from "react"
import ResidentInfo from "./ResidentInfo.jsx"
import Loader from './Loader'

const ResidentContainer = ({ setLoading, url, key }) => {

    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [status, setStatus] = useState("")
    const [species, setSpecies] = useState("")
    const [location, setLocation] = useState("")
    const [episodes, setEpisodes] = useState("")
    const [id, setId] = useState("")

    useEffect(() => {
        if (url) {
            setLoading(true)
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setImage(data.image)
                    setName(data.name)
                    setStatus(data.status)
                    setSpecies(data.species)
                    setLocation(data.location.name)
                    setEpisodes(data.episode.length)
                    setId(data.id)
                    setLoading(false)
                })
        }
    }, [url])

    return (  
        <ResidentInfo id={id} image={image} name={name} status={status} species={species} location={location} episodes={episodes} />
    )
}

export default ResidentContainer
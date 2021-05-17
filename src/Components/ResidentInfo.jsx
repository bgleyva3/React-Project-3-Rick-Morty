import React from "react"

const ResidentInfo = (props) => {
    return (
        <div key={props.key}>
            <img src={props.image} />
            <p>{props.name}</p>
            <p>{props.status} - {props.species}</p>
            <p>{props.location}</p>
            <p>{props.episodes} episodes</p>
        </div>
    )
}

export default ResidentInfo
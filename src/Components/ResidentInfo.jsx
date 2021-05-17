import React from "react"

const ResidentInfo = (props) => {
    return (
        <div className="resident-card" key={props.key}>
            <img src={props.image} />
            <p>{props.name}</p>
            <hr></hr>
            <p>{props.status} - {props.species}</p>
            <p>{props.location}</p>
            <p>{props.episodes} episodes</p>
        </div>
    )
}

export default ResidentInfo
import React from "react"

const ResidentInfo = (props) => {

    return (
        <div className="resident-card" key={props.key}>

            <img src={props.image} />
            <p><i className="fas fa-user-circle"></i> &nbsp; {props.name}</p>
            <hr></hr>
            {
                props.status === "Alive" ?
                    <p><i className="fas fa-circle green"></i> &nbsp; {props.status}</p>
                    :
                    props.status === "Dead" ?
                        <p><i className="fas fa-circle red"></i> &nbsp; {props.status}</p>
                        :
                        <p><i className="fas fa-circle yellow"></i> &nbsp; {props.status}</p>
            }

            <p><i className="fas fa-otter"></i> &nbsp; {props.species}</p>
            <p><i className="fas fa-globe-europe"></i> &nbsp; {props.location}</p>
            <p><i className="fab fa-youtube"></i> &nbsp; {props.episodes} episodes</p>
        </div>
    )
}

export default ResidentInfo
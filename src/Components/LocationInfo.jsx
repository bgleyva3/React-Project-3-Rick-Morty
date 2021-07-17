import React from "react"

const LocationInfo = (props) => {
    return (
        props.residents.length !== 0 &&
        <div className="location-info">
            <p><i className="fas fa-map-marker-alt"></i> &nbsp; {props.location.name}</p>
            <hr></hr>
            <p><i className="fas fa-globe-europe"></i> &nbsp; {props.location.type}</p>
            <p><i className="fas fa-map-marked-alt"></i> &nbsp; {props.location.dimension}</p>
            {
                props.location.residents
                    ?
                    <p><i className="fas fa-user-friends"></i> &nbsp; {props.location.residents.length} residents</p>
                    :
                    <div></div>
            }
        </div >
    )
}

export default LocationInfo
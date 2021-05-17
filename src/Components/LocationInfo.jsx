import React from "react"

const LocationInfo = (props) => {
    return (
        <div className="location-info">
            <p>{props.location.name}</p>
            <p>{props.location.type}</p>
            <p>{props.location.dimension}</p>
            {
                props.location.residents
                    ?
                    <p>{props.location.residents.length} residents</p>
                    :
                    <div></div>
            }



        </div>
    )
}

export default LocationInfo
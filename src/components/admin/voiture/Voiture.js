import React from 'react'

export const Voiture = (props) => {
    return (
        <div>
            <img src={props.image} alt='voiture poster' />
            <p>{props.model}</p>
            <p>{props.matricule}</p>
            <p>{props.description}</p>
        </div>
    )
}

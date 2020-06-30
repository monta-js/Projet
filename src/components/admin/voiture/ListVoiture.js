import React from 'react'
import { Voiture } from './Voiture'

export const ListVoiture = ({voituresList}) => {
    return (
        <div>
            {voituresList
        .map((el, i) => (
          <Voiture key={i} Voiture={el} />
        ))
        }
        </div>
    )
}

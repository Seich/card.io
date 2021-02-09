import React from 'react'
import Skeleton from 'react-loading-skeleton'
import CardListItem from './CardListItem'

import './CardsList.css'

const CardsList = ({ cards, selectedCardId, onClick, isLoading }) => {
  if (isLoading) {
    return (
      <div className="CardsList">
        <Skeleton
          className="CardsList__loadingPlaceholder"
          height={'90px'}
          count={3}
        />
      </div>
    )
  }

  return (
    <div className="CardsList">
      {cards.map(card => (
        <CardListItem
          key={card.id}
          name={card.name}
          network={card.network}
          last4={card.last4}
          active={card.active}
          selected={card.id === selectedCardId}
          onClick={() => onClick(card.id)}
        />
      ))}
    </div>
  )
}

export default CardsList

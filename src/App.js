import React, { useState, useEffect } from 'react'
import CardsList from './components/CardsList'
import CardDetails from './components/CardDetails'
import { getCards, disableCard } from './api'

import './App.css'

function App() {
  const [selectedCardId, setSelectedCardId] = useState(null)
  const [cards, setCards] = useState([])
  const [isLoadingCards, setIsLoadingCards] = useState(false)

  useEffect(() => {
    setIsLoadingCards(true)
    getCards().then(json => {
      setIsLoadingCards(false)
      setCards(json)
    })
  }, [])

  const selectedCard = cards.find(card => card.id === selectedCardId)

  const disableCardClicked = cardId => {
    disableCard(cardId).then(result => {
      const cs = cards.map(c => {
        if (c.id === cardId) {
          return result
        }

        return c
      })
      
      setCards(cs)
    })
  }

  return (
    <div>
      <div className="App__nav">Card.io</div>

      <main className="App__main">
        <CardsList
          cards={cards}
          selectedCardId={selectedCardId}
          onClick={id => setSelectedCardId(id)}
          isLoading={isLoadingCards}
        />

        {selectedCardId !== null && (
          <CardDetails
            card={selectedCard}
            cardId={selectedCardId}
            onCloseClicked={() => setSelectedCardId(null)}
            onDisableCard={disableCardClicked}
          />
        )}
      </main>
    </div>
  )
}

export default App

import './CardDetails.css'

import React, { useEffect, useState } from 'react'

import { getCardDetails, getCardTransactions } from '../api'

import StatusBadge from './StatusBadge'
import CreditCard from './CreditCard'
import TransactionList from './TransactionList'

const CardDetails = ({ card, onCloseClicked, onDisableCard }) => {
  const [details, setDetails] = useState({})
  const [transactions, setTransactions] = useState([])
  const [areCardDetailsLoading, setAreCardDetailsLoading] = useState(true)
  const [areTransactionsLoading, setAreTransactionsLoading] = useState(true)

  useEffect(() => {
    setAreCardDetailsLoading(true)
    getCardDetails(card.id).then(card => {
      setDetails(card)
      setAreCardDetailsLoading(false)
    })

    setAreTransactionsLoading(true)
    getCardTransactions(card.id).then(transactions => {
      setTransactions(transactions)
      setAreTransactionsLoading(false)
    })
  }, [card])

  return (
    <div className="CardDetails">
      <button className="CardDetails__close" onClick={onCloseClicked}>
        X
      </button>

      <div className="CardDetails__summary">
        <CreditCard
          name={card.name}
          number={details.number}
          expiration_month={details.expiration_month}
          expiration_year={details.expiration_year}
          network={card.network}
          cvv={details.cvv}
          isLoading={areCardDetailsLoading}
        />

        <div className="CardDetails__status">
          <div>
            <StatusBadge active={card.active} disabled={!card.active} />
          </div>

          {card.active && (
            <button
              disabled={!card.active}
              onClick={() =>
                window.confirm('Are you sure you want to disable this card?') &&
                onDisableCard(card.id)
              }>
              Disable Card
            </button>
          )}
        </div>
      </div>
      <TransactionList
        transactions={transactions}
        isLoading={areTransactionsLoading}
      />
    </div>
  )
}

export default CardDetails

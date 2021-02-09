import './TransactionList.css'

import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'

const TransactionList = ({ transactions, isLoading }) => {
  const [query, setQuery] = useState('')

  if (isLoading) {
    return (
      <div className="TransactionList">
        <p className="subheaderText">Transactions</p>
        <Skeleton
          className="TransactionList__placeholderItem"
          height={'70px'}
          count={4}
        />
      </div>
    )
  }

  transactions = transactions.filter(tx =>
    tx.label.toLowerCase().includes(query)
  )

  return (
    <div className="TransactionList">
      <div className="subheaderText TransactionList__header">
        <span>Transactions</span>
        <input
          type="text"
          placeholder="Search for a transaction"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      {transactions.map(transaction => {
        const purchaseDate = new Date(transaction.purchase_date)
        const dateString = purchaseDate.toLocaleDateString('en-US')

        return (
          <div key={transaction.id} className="TransactionList__item">
            <div className="TransactionList__itemDate">{dateString}</div>
            <div className="TransactionList__itemLabel">
              {transaction.label}
            </div>
            <div className="TransactionList__itemAmount">
              {`- ${transaction.amount}`}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TransactionList

import Skeleton from 'react-loading-skeleton'
import './CreditCard.css'

const CreditCard = ({
  name,
  number,
  expiration_month,
  expiration_year,
  network,
  cvv,
  isLoading
}) => {
  if (isLoading) {
    return <Skeleton height={'190px'} />
  }

  number = number.replace(/(?=(\d{4})+(?!\d))/g, " ")

  return (
    <div className="CreditCard">
      <div className="CreditCard__name">{name}</div>
      <div className="CreditCard__number">{number}</div>

      <div className="CreditCard__row">
        <div className="CreditCard__expiration">
          <span>Exp</span> {expiration_month} / {expiration_year}
        </div>
        <div className="CreditCard__cvv">
          <span>CVV</span> {cvv}
        </div>
      </div>

      <div className="CreditCard__network">{network}</div>
    </div>
  )
}

export default CreditCard

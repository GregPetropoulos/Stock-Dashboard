import React from 'react'

const AsideCard = () => {
  return (
    <div className="card w-full h-full bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Your Cards</h2>
    <p>Carousel here </p>
    <p>Recent Transactions History </p>
    <div className="card-actions justify-end">
      <button className="btn">Upgrade Now</button>
    </div>
  </div>
</div>
  )
}

export default AsideCard
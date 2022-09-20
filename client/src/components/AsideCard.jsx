import React from 'react'
import Carousel from './Carousel'
import RecentTransactionsCard from './RecentTransactionsCard'
import UpgradeNowCard from './UpgradeNowCard'
const AsideCard = () => {
  return (
    <div className="card h-full bg-primary justify-center align-middle items-center  text-center text-primary-content">
  <div className="card-body">
    <h2 className="card-title justify-center items-center ">Your Cards</h2>
    <Carousel/>
<RecentTransactionsCard/>
<UpgradeNowCard/>
  </div>
</div>
  )
}

export default AsideCard
import React from 'react'
import './Board.css'
import './CarDonation.css'

export default function CarDonation() {
  return (
    <main id="main-content">
      <header className="board-hero" aria-labelledby="car-donation-heading">
        <h1 id="car-donation-heading">Car Donation Program</h1>
      </header>
      <div className="donation-header2">
        <h2>DONATE YOUR CAR TODAY!!</h2>
      </div>
      <p>
        If you have a car that you want to let go (running or not), 
        but don’t want the hassle of having to sell it, consider donating 
        it to the Seymour Center for a valuable tax deduction. 
        Funds raised from donated vehicles (cars, trucks, SUVs, motorcycles, 
        RVs/campers, semi-tractors, farm equipment, horse trailers, boats, 
        airplanes, and motorized wheelchairs) go directly to support the 
        Robert & Pearl Seymour Center and the many programs and services 
        provided to older adults of Orange County. 
      </p>
      <p>
        You can start the process online by clicking <a href="https://careasy.org/nonprofit/Friends-of-Robert-and-Pearl-Seymour-Center-Inc">here</a> or by calling <b>(844) 750-4483</b>. 
        Our representative is on duty 24/7 to take your call and will schedule a fast, 
        free tow pick-up of your vehicle that’s convenient to you. Once your vehicle 
        is sold, you will be sent a receipt for your tax records, and the sale proceeds 
        will be donated directly to the Seymour Center in your name.

      </p>
    </main>
  )
}

import React from 'react'
import './Board.css'
import './Donate.css'

const PAYPAL_DONATE_URL =
  'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=56YBTMLPFA2LQ'

export default function Donate() {
  return (
    <main id="main-content" className="donate-page">
      <header className="board-hero" aria-labelledby="donate-heading">
        <h1 id="donate-heading">Donate</h1>
      </header>
      <p className="donate-lead">
        Your gift helps the Friends of the Robert and Pearl Seymour Center
        support programs, activities, and wellness opportunities for older
        adults in Orange County. Thank you for your generosity.
      </p>
      <a
        className="donate-paypal-link"
        href={PAYPAL_DONATE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate with PayPal
      </a>
      <p className="donate-note">
        You will leave this site and complete your donation on PayPal&apos;s
        secure page.
      </p>
    </main>
  )
}

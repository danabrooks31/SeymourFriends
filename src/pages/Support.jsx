import React from 'react'
import './Board.css'
import './Support.css'

export default function Support() {
  return (
    <main id="main-content">
      <header className="board-hero" aria-labelledby="support-heading">
        <h1 id="support-heading">Support</h1>
      </header>

      <div className="support-para">
        <p>
          Fundraising makes services possible at the Center. We incur no administrative cost—all donations are directed toward meeting the needs of the Center.
        </p>
        <p>
          We also offer tax advantages to our donors. For example, all gifts whether in cash, securities, or other assets are tax-deductible. In some cases, corporations will match their employees’ contributions. We will provide a receipt to verify to the IRS that a donation was made to a non-profit organization 501(c)(3).
        </p>
      </div>

      <header className="board-hero" aria-labelledby="donation-ways-heading">
        <h2 id="donation-ways-heading">
          Making a Donation is Easy! Here are ways how:
        </h2>
      </header>

      <section className="donation-content container">
      <ol>
        <li>
          <div className="list1">
            <h3>Online Donations</h3>
          </div>
          <p>
            It's quick and easy! You can use most major credit cards, debit cards, or PayPal. To get started, click <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=56YBTMLPFA2LQ">here</a>.
          </p>
        </li>

        <li>
          <div className="list2">
            <h3>Write a Check</h3>
          </div>
          <p>
            To view our check remittance form, click <a href="https://drive.google.com/file/d/1rP0jpeWJTrw8L_7UWc-i_MzNj_vBl2W0/view?usp=sharing">here</a>. Please print the form, fill it out, and mail it along with your check.
          </p>
        </li>

        <li>
          <div className="list3">
            <h3>Bequeath by Will</h3>
          </div>
          <p>
            One of the easiest ways to donate is to indicate in your will that a contribution in the form of cash, securities, or other assets will be earmarked for the Seymour Center.
          </p>
        </li>

        <li>
          <div className="list4">
            <h3>Set Up a Trust</h3>
          </div>
          <p>
            Gifts can be made through a variety of standard life income agreements. This might include charitable gift annuities, charitable remainder unitrusts, pooled income funds, or other types of trusts. Consult with your attorney or allow us to recommend an attorney who specializes in these matters.
          </p>
        </li>

        <li>
          <div className="list5">
            <h3>Donate a Vehicle</h3>
          </div>
          <p>
            Donate your car, truck, SUV, RV, camper, motorcycle, or electric wheelchair as a tax-deductible gift. Title transfers and towing are free.
          </p>
          <p>
            You can start the process online by clicking <a href="https://careasy.org/nonprofit/Friends-of-Robert-and-Pearl-Seymour-Center-Inc">here</a> or picking up a phone and speaking to a live operator. If you have any questions just call one of our friendly operators toll-free at <b>(844) 750-GIVE </b>or<b> (844) 750-4483</b>.
          </p>
        </li>

        <li>
          <div className="list5">
            <h3>Volunteer</h3>
          </div>
          <p>
            You don’t have to donate money—just your time. The Orange County Connect 55+ Volunteer Program has meaningful volunteer opportunities that work with more than 100 local nonprofit and public agencies. Call <b>(919) 245-4241</b> if you are interested in giving back to the community.

          </p>
        </li>
      </ol>
      </section>
    </main>
  )
}
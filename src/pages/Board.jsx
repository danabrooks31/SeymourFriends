import React from 'react'
import './Board.css'

const Board = () => {
  return (
    <main className="page-board" id="main-content">
        <header className="board-hero">
          <h1>Board of Directors</h1>
        </header>

        <section
          className="board-section board-section--officers"
          aria-labelledby="officers-title"
        >
          <h2 id="officers-title">Officers</h2>
          <ul className="board-officers">
            <li>
              <span className="board-role">President</span>
              <span className="board-name">Ceresa Clarke</span>
              <span className="board-since">Since 2019</span>
            </li>
            <li>
              <span className="board-role">Vice President</span>
              <span className="board-name">Ann Wilkerson</span>
              <span className="board-since">Since 2019</span>
            </li>
            <li>
              <span className="board-role">Correspondence Secretary</span>
              <span className="board-name">Joy Gattis</span>
              <span className="board-since">Since 2019</span>
            </li>
            <li>
              <span className="board-role">Treasurer</span>
              <span className="board-name">Lewis Atwater</span>
              <span className="board-since">Since 2019</span>
            </li>
          </ul>
        </section>

        <section
          className="board-section board-section--directors"
          aria-labelledby="directors-title"
        >
          <h2 id="directors-title">Directors at Large</h2>
          <ul className="board-directors">
            <li>
              <span className="board-name">Keith Dodson</span>
              <span className="board-director-note">
                Chapel Hill Parks &amp; Rec Representative
              </span>
            </li>
            <li>
              <span className="board-name">Priya Kannan</span>
            </li>
            <li>
              <span className="board-name">Gail Edwards</span>
            </li>
            <li>
              <span className="board-name">Rosa Gonzales</span>
              <span className="board-director-note">Spanish Liaison</span>
            </li>
            <li>
              <span className="board-name">Fung Little</span>
              <span className="board-director-note">Chinese Liaison</span>
            </li>
            <li>
              <span className="board-name">Rose Ogu</span>
            </li>
            <li>
              <span className="board-name">Sheila Evans</span>
            </li>
          </ul>
        </section>

        <p className="board-as-of">As of March 2026</p>
    </main>
  )
}

export default Board 

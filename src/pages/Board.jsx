import { useEffect, useState } from 'react'
import './Board.css'
import { getSanityClient, BOARD_QUERY, mapSanityBoard } from '../lib/sanityClient'

const JACKIE_PODGER = { name: 'Jackie Podger', note: '' }

const BOARD_FALLBACK = {
  asOf: 'As of September 2026',
  officers: [
    { role: 'President', name: 'Ceresa Clarke', since: 'Since 2019' },
    { role: 'Vice President', name: 'Ann Wilkerson', since: 'Since 2019' },
    {
      role: 'Correspondence Secretary',
      name: 'Joy Gattis',
      since: 'Since 2019',
    },
    { role: 'Treasurer', name: 'Lewis Atwater', since: 'Since 2019' },
  ],
  directors: [
    {
      name: 'Keith Dodson',
      note: 'Chapel Hill Parks & Rec Representative',
    },
    { name: 'Priya Kannan', note: '' },
    { name: 'Gail Edwards', note: '' },
    { name: 'Rosa Gonzales', note: 'Spanish Liaison' },
    { name: 'Fung Little', note: 'Chinese Liaison' },
    { name: 'Rose Ogu', note: '' },
    JACKIE_PODGER,
  ],
}

function withJackiePodger(board) {
  const hasJackie = (board.directors || []).some(
    (person) => person.name.trim().toLowerCase() === 'jackie podger',
  )
  if (hasJackie) return board
  return {
    ...board,
    directors: [...(board.directors || []), JACKIE_PODGER],
  }
}

const Board = () => {
  const [board, setBoard] = useState(BOARD_FALLBACK)

  useEffect(() => {
    const client = getSanityClient()
    if (!client) return

    let cancelled = false
    client
      .fetch(BOARD_QUERY)
      .then((doc) => {
        if (cancelled) return
        const mapped = mapSanityBoard(doc)
        if (mapped) {
          setBoard(
            withJackiePodger({
              ...mapped,
              asOf: mapped.asOf || BOARD_FALLBACK.asOf,
            }),
          )
        }
      })
      .catch(() => {
        /* keep fallback */
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <main className="page-board" id="main-content">
      <header className="board-hero">
        <h1>Board of Directors</h1>
      </header>

      {board.officers.length > 0 && (
        <section
          className="board-section board-section--officers"
          aria-labelledby="officers-title"
        >
          <h2 id="officers-title">Officers</h2>
          <ul className="board-officers">
            {board.officers.map((person) => (
              <li key={`${person.role}-${person.name}`}>
                <span className="board-role">{person.role}</span>
                <span className="board-name">{person.name}</span>
                {person.since && (
                  <span className="board-since">{person.since}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {board.directors.length > 0 && (
        <section
          className="board-section board-section--directors"
          aria-labelledby="directors-title"
        >
          <h2 id="directors-title">Directors at Large</h2>
          <ul className="board-directors">
            {board.directors.map((person) => (
              <li key={person.name}>
                <span className="board-name">{person.name}</span>
                {person.note && (
                  <span className="board-director-note">{person.note}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {board.asOf && <p className="board-as-of">{board.asOf}</p>}
    </main>
  )
}

export default Board

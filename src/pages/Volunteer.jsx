import React from 'react'
import phamplet from '../photos/friendsofSeymourpamphlet.pdf'

const Volunteer = () => {
  return (
    <div>
      <h1>Volunteer Phamplet</h1>

      <iframe
        src={phamplet}
        width="100%"
        height="900px"
        title="Board Packet"
      />
    </div>
  )
}

export default Volunteer
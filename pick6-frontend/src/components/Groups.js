import React from 'react'
import { Link } from 'react-router-dom'


const Groups = ({ groups }) => {

  return (
    groups.length > 0 ?
      <div>
        {groups.map((group) => {
          return (
            <>
            <h2><u>My Groups:</u></h2>
            <p key={group.id} className="group-links"><Link to={`/groups/${group.id}`} >{group.attributes.name}</Link></p>
            </>
          )
          }
        )}
      </div> :
      <p>You currently have no groups! Create or join one below.</p>
  )
}

export default Groups

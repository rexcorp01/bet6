import React from 'react'
import { Link } from 'react-router-dom'


const Weeks = ({ group, weeks, match }) => {

  return (
    weeks.length > 0 ?
      <div className="week-list">
        {weeks.map((week) => {
          return <p key={week.id}><Link to={`${match.url}/weeks/${week.id}`}>{week.attributes.number}</Link></p>
          }
        )}
      </div> :
      <p>Something went wrong! This group has no weeks.</p>
  )
}

export default Weeks

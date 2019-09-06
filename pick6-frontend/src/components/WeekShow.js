import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentWeek } from '../actions/currentWeek.js'
import WeekTable from './WeekTable.js'

class WeekShow extends React.Component {

  componentDidMount() {
    this.props.getCurrentWeek(parseInt(this.props.match.params.id))
  }

  render(){
    console.log(this.props)
    const { week } = this.props

    return (
      week ?
      <><div>
        <h3>WEEK {week.attributes.number}</h3>
        <h4>Pick sheet link</h4>
        <WeekTable week={week}/>
      </div></> :
      null
    )
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    week: state.currentWeek
  }
}

export default connect(mapStateToProps, { getCurrentWeek })(WeekShow)

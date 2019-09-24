import React from 'react'
import { connect } from 'react-redux'
import { getCurrentWeek } from '../actions/currentWeek.js'
import WeekTable from './WeekTable.js'
import PickSheetForm from './PickSheetForm.js'
import MyPicks from './MyPicks.js'
import moment from "moment";

class WeekShow extends React.Component {


  componentDidMount() {
    this.props.getCurrentWeek(parseInt(this.props.match.params.id))
  }


  render(){
    const { week, currentUser } = this.props
    const today = moment().format('YYYY-MM-DD')

    const showSomething = () => {
      if (week && currentUser) {
        if (currentUser.attributes.picks.find(p => p.week_id === parseInt(week.id)) && (today >= week.attributes.games[0].day)) {
          return <WeekTable week={week} />
        } else if (currentUser.attributes.picks.find(p => p.week_id === parseInt(week.id)) && !(today >= week.attributes.games[0].day)) {
          return <MyPicks week={week} />
        } else if (!currentUser.attributes.picks.find(p => p.week_id === parseInt(week.id)) && (today >= week.attributes.games[0].day)) {
          return <WeekTable week={week} />
        } else if (!currentUser.attributes.picks.find(p => p.week_id === parseInt(week.id)) && !(today >= week.attributes.games[0].day)) {
          return <PickSheetForm week={week}/>
        } else {
          return null
        }
      } else {
        return null
      }
    }

    return (
      week ?
      <><div>
        <span>{showSomething()}</span>
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

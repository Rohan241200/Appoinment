import {Component} from 'react'
import {v4 as uuId} from 'uuid'

import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    userName: '',
    userDate: '',
    userDetails: [],
    isActiveStatusStar: false,
  }

  onSubmitData = event => {
    event.preventDefault()
    const {userName, userDate} = this.state

    const newAppoinment = {
      id: uuId(),
      name: userName,
      date: userDate,
      isFavourite: true,
    }

    this.setState(prevState => ({
      userDetails: [...prevState.userDetails, newAppoinment],
      userName: '',
      userDate: '',
    }))
  }

  onChnageFavourite = id => {
    this.setState(prevState => ({
      userDetails: prevState.userDetails.map(each => {
        if (each.id === id) {
          return {...each, isFavourite: !each.isFavourite}
        }
        return each
      }),
    }))
  }

  onactiveStar = () => {
    const {userDetails, isActiveStatusStar} = this.state
    const filterisActive = userDetails.filter(
      each => each.isFavourite === isActiveStatusStar,
    )

    this.setState({userDetails: filterisActive})
  }

  userTitleInput = event => {
    this.setState({userName: event.target.value})
  }

  userTitleDate = event => {
    this.setState({userDate: event.target.value})
  }

  render() {
    const {userName, userDate, userDetails} = this.state
    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1 className="heading">Add Appointment</h1>
          <div className="user-details-card">
            <form className="user-card" onSubmit={this.onSubmitData}>
              <label htmlFor="title" className="user-label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                className="user-input"
                placeholder="Title"
                value={userName}
                onChange={this.userTitleInput}
              />
              <label htmlFor="date" className="user-label">
                DATE
              </label>
              <input
                type="date"
                id="date"
                className="user-input"
                value={userDate}
                onChange={this.userTitleDate}
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointment"
            />
          </div>
          <hr className="separate" />
          <div className="app-card">
            <h1 className="app-desc">Appointments</h1>
            <button
              type="button"
              className="app-star"
              onClick={this.onactiveStar}
            >
              Starred
            </button>
          </div>
          <ul className="items">
            {userDetails.map(each => (
              <AppointmentItem
                userdetail={each}
                isFavourited={this.onChnageFavourite}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments

import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {userdetail, isFavourited} = props
  const {id, name, date, isFavourite} = userdetail

  const formatDate = format(new Date(date), 'dd MM yyyy, EEEE')

  const filterFavourite = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  const onChangeFavourite = () => {
    isFavourited(id)
  }

  return (
    <li className="user-lists-card">
      <div className="user-card-details">
        <p className="user-card-name">{name}</p>
        <button
          type="button"
          className="star-btn"
          onClick={onChangeFavourite}
          data-testid="star"
        >
          <img src={filterFavourite} alt="star" />
        </button>
      </div>
      <p className="user-card-date">{formatDate}</p>
    </li>
  )
}

export default AppointmentItem

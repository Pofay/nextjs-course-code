import Card from '../ui/Card'
import classes from './MeetupItem.module.css'

const MeetupItem = ({ id, title, image, address, description, onClick }) => {
  return (
    <li key={id} className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt='' />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={onClick}>To Favorites</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem

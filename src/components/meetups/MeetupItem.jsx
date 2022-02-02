import classes from './MeetupItem.module.css'

const MeetupItem = ({ key, title, image, address, description, onClick }) => {
  return (
    <li key={key} className={classes.item}>
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
    </li>
  )
}

export default MeetupItem

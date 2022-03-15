import { useContext } from 'react'
import MeetupsContext from '../../store/meetups-context'
import Card from '../ui/Card'
import classes from './MeetupItem.module.css'

const MeetupItem = ({ id, title, image, address, description }) => {
  const favoritesCtx = useContext(MeetupsContext)

  const itemIsFavorite = favoritesCtx.itemIsFavorite(id)

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id)
    } else {
      favoritesCtx.addFavorite({
        id,
        title,
        image,
        address,
        description,
      })
    }
  }

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
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem

import { createContext, useState } from 'react'

const MeetupsContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
})

export const MeetupsContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([])

  const addFavoriteHandler = (meetup) => {
    setUserFavorites((prevFavorites) => prevFavorites.concat(meetup))
  }

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevFavorites) =>
      prevFavorites.filter((meetup) => meetup.id !== meetupId)
    )
  }

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  }

  return (
    <MeetupsContext.Provider value={context}>
      {props.children}
    </MeetupsContext.Provider>
  )
}

export default MeetupsContext

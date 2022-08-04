import React from 'react'
import './ShowMoreButton.scss'

import { useDispatch } from 'react-redux'
import { fetchCats, loadeMore } from '../../redux/slices/catSlice'

const ShowMoreButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(loadeMore())
    dispatch(fetchCats())
  }

  return (
    <div onClick={handleClick} className="more">Show more</div>
  )
}

export default ShowMoreButton
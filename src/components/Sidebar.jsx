import React from 'react'
import Button from 'react-bootstrap/Button';
import '../index.css'

import { useDispatch, useSelector } from 'react-redux'
import { getCatsByCategories } from '../redux/slices/catSlice'

const Sidebar = () => {

const dispatch = useDispatch()
const {categories} = useSelector(state => state.catReducer)

  const handleCategoryClick = (id) => {
    dispatch(getCatsByCategories(id))
  }

  return (
    <ul style={{listStyle: "none"}}>
      {categories.map(category => (
        <li key={category.id}><Button onClick={() => handleCategoryClick(category.id)} variant="primary" className='category-item mb-2' size="sm">{category.name}</Button></li>
      ))}
      
    </ul>
  )
}

export default Sidebar
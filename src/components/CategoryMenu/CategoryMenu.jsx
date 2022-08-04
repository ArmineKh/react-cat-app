import React, { useEffect } from 'react'
import './CategoryMenu.scss'

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import { fetchCatsCategories } from '../../redux/slices/catSlice'

const CategoryMenu = () => {
const dispatch = useDispatch()
const { categories } = useSelector(state => state.catReducer)

useEffect(() => {
    dispatch(fetchCatsCategories())
}, [dispatch]);

  return (
    <div className="category-menu">
        <ul className="menu-list">
            {categories.map(category => (
                <li key={category.id} id={category.id}><Link to={`/categories/${category.id}`}>{category.name}</Link></li>
            ))}
        </ul>
    </div>
  )
}

export default CategoryMenu
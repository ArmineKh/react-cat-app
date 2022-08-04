import React, { useEffect } from 'react'

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchCatsByCategories } from '../../redux/slices/catSlice'

import CategoryMenu from '../CategoryMenu/CategoryMenu'
import Gallery from '../Gallery/Gallery'
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton'
import Loading from '../Gallery/Loading'

const Category = () => {
let {categoryId} = useParams();
const dispatch = useDispatch()
const { loading, images } = useSelector(state => state.catReducer)
console.log(images)

useEffect(() => {
    dispatch(fetchCatsByCategories(categoryId))
}, [dispatch, categoryId]);

  return (
    <div className="container">
        <div className="heading-container">
            <h1 className="heading">Cat Categoty Gallery</h1>
        </div>
        <div className="content-continer">
          <CategoryMenu />
          <Gallery images={images}  />
        </div>
        <ShowMoreButton />
        {loading && <Loading /> }
    </div>
  )
}

export default Category
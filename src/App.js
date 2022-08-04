import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { fetchCats } from './redux/slices/catSlice'


import CategoryMenu from './components/CategoryMenu/CategoryMenu'
import Gallery from './components/Gallery/Gallery'
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton'
import Loading from './components/Gallery/Loading'

function App() {
const dispatch = useDispatch()
const { images,loading } = useSelector(state => state.catReducer)

useEffect(() => {
    dispatch(fetchCats())
}, [dispatch]);
  
  return (
    <div className="container">
        <div className="heading-container">
            <h1 className="heading">Cat Gallery</h1>
        </div>
        <div className="content-continer">
          <CategoryMenu />
          <Gallery images={images} />
        </div>
        <ShowMoreButton />
        {loading && <Loading /> }
    </div>
  );
}

export default App;

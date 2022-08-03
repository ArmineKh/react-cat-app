import React, {useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Sidebar from './components/Sidebar'
import ImageCard from './components/ImageCard'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCats, fetchCatsCategories, loadeMore } from './redux/slices/catSlice'

function App() {
const dispatch = useDispatch()
const {images, categories, loading} = useSelector(state => state.catReducer)

useEffect(() => {
    dispatch(fetchCats())
    dispatch(fetchCatsCategories())

  }, [dispatch]);

  const handleLoadeMore = () => {
    dispatch(loadeMore())
    dispatch(fetchCats())
  };
  
  return (
    <>
      <Container className='app-container'>
        <Row className='pt-5 pb-5'>
          <Col sm={12} md={4}>
            <Sidebar categories={categories} />
          </Col>
          <Col sm={12} md={8} className="d-flex justify-content-center align-items-center flex-wrap gap-3">
            {images.map(image => (
              <ImageCard key={image.id} imgSrc={image.url} />
            ))}
          </Col>
        </Row>
      </Container>
      {loading && <Container className='d-flex justify-content-center'>Loading ...</Container>}
      <button onClick={handleLoadeMore}>Loade More</button>
    </>
  );
}

export default App;

import React, { useEffect } from 'react'
import Book from './Book';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { getBooks } from '../../actions/books';

const Books = () => {
	// const dispatch = useDispatch()
	// useEffect(()=>{
	// 	dispatch(getBooks())
	// }, [])

	const all_books = useSelector((state) => state.books)
  
	return (
		<>
			<Link to='/addbook'><Button variant='success' className='m-5'>Add New Book</Button></Link>
			<Row className='m-5 text-center'>
				{all_books.map((book) => (
					<Col key={book._id}>
						<Book book={book} />
					</Col>
				))}
			</Row>
		</>
  )
}

export default Books;
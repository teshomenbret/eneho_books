import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const AddBook = () => {
    const [formData, setFormData] = useState({title: '', author: '', description: '', price: '', pages:'', selectedFile:''})
    const handleChange = () => {

    } 

    return (
        <div className='bg-light m-1'>
        <div className='border border-success ml-5 mr-5 p-5 bg-white rounded'>
        <h1>Add Book</h1>
        <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="bookTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="email" value={formData.title} placeholder="Enter Title" onChange={(e)=>{setFormData({...formData, title: e.target.value})}}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="bookAuthor" >
                        <Form.Label>Author</Form.Label>
                        <Form.Control placeholder="Enter Author Name" value={formData.author}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="bookDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as='textarea' rows={4} value={formData.description}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="bookPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control placeholder="Enter Book Price" value={formData.price}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="bookPageNumber">
                        <Form.Label>Number of Page</Form.Label>
                        <Form.Control placeholder="Enter Number of page" value={formData.pages}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Enter the cover image of the Book</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Col>
            </Row>
            
            <Button variant="success" type="submit">
            Submit
            </Button>
        </Form>
        </div>
        </div>
  )
}

export default AddBook
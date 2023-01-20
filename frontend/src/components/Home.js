import React from 'react'
import Button from 'react-bootstrap/Button'
import Temsalet from '../images/temsalet-Book.jpg'

const Home = () => {
    return (
            <div >
            <body className='bg-light'>
                <div className='row m-1 p-5'>
                    <div className='col text-start'>
                        <h1>We live to serve Book Lovers, work with us and Save your time and Money</h1>
                        <p>Enho books is an Ecommerce platform that aims to simplify the process of book distribution across our country. 
                        Our platform will enable booksellers around Ethiopia to buy books online, 
                        with a highly professional delivery system that brings your order to your doorstep, 
                        cutting down all the unnecessary hassle. </p>
                        <Button variant='success' className='mt-5 mb-3'>Get Started</Button>
                    </div>
                    <div className='col text-center'>
                        <img src={Temsalet}
                            width={300}
                            height ={400}
                            alt=''/>
                    </div>
                </div>
            </body>
            </div>
    )
}

export default Home;

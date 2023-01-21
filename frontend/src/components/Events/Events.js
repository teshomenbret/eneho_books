import React from 'react'
import Event from './Event'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
// import { getEvents } from '../../actions/events'

const Events = () => {

    // const dispatch = useDispatch()
    // useEffect(()=>{
    //   dispatch(getEvents())
    // }, [])
    
	const all_events = useSelector((state)=> state.events)

    return (
      <>
	  	<Row className='m-5 text-center'>
		  {all_events.map((eventObj => (
			<Col key={eventObj._id} >
				<Event eventObj={eventObj} />
			</Col>			
		  )))}
		</Row>
      </>
    )
}

export default Events
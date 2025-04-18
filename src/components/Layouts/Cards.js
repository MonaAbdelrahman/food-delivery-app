import React from 'react'
import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';
import {renderRatingIcons} from '../../pages/Home/Section3'

function Cards(props) {
    return (
<Col style={{ width: '18rem' }}  sm={6} xl={3} className='mb-4'>
    <Card className='overflow-hidden'>
        <div className='overflow-hidden'>
        <Card.Img variant="top" src={props.image} />
        </div>
    <Card.Body>
    <div className='d-flex align-items-center justify-content-between'>
        <div className='item_rating'>{renderRatingIcons(props.rating)}</div>
        <div className='wishlist'>
        <i className="bi bi-heart"></i>
        </div>
    </div>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
        {props.paragraph}
    </Card.Text>
    <div className='d-flex align-items-center justify-content-between'>
        <div className='menu_price'>
            <h5 className='mb-0'>${props.price}</h5>
        </div>
        <div className='add_to_card'>
            <Link to='/' >
            <i className="bi bi-bag me-2"></i>
            Add To Cart
            </Link>
        </div>
    </div>
    </Card.Body>
</Card>
</Col>
    )
}

export default Cards

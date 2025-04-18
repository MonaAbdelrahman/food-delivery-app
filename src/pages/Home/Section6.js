import React from 'react'
import { Container, Row } from 'react-bootstrap'
import User1 from '../../assets/blog/review-author-1.jpg'
import User2 from '../../assets/blog/review-author-2.jpg'
import User3 from '../../assets/blog/review-author-3.jpg'
import User4 from '../../assets/blog/review-author-5.jpg'
import Carousel from 'react-bootstrap/Carousel';


export function Section6() {
    

    return (
        <>
            <section className='blog_section'>
                <Container>
                    <Row>
                <Carousel>
    <Carousel.Item className="text-center">
    <img src={User1} className="img-fluid mx-auto d-block" alt='User-1'/>
    <Carousel.Caption>
        <p>" Etiam sapien sem at sagittis congue augue massa varius
                sodales sapien undo tempus dolor egestas magna suscipit magna
                tempus aliquet porta sodales augue suscipit luctus neque "</p>
                <div className='item_rating mb-2'>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="text-center">
    <img src={User2} className="img-fluid mx-auto d-block" alt='User-2'/>
    <Carousel.Caption>
        <p>" Etiam sapien sem at sagittis congue augue massa varius
                sodales sapien undo tempus dolor egestas magna suscipit magna
                tempus aliquet porta sodales augue suscipit luctus neque "</p>
                <div className='item_rating mb-2'>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="text-center">
    <img src={User3} className="img-fluid mx-auto d-block" alt='User-3'/>
    <Carousel.Caption>
        <p>" Etiam sapien sem at sagittis congue augue massa varius
                sodales sapien undo tempus dolor egestas magna suscipit magna
                tempus aliquet porta sodales augue suscipit luctus neque "</p>
                <div className='item_rating mb-2'>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="text-center">
    <img src={User4} className="img-fluid mx-auto d-block" alt='User-4'/>
    <Carousel.Caption>
        <p>" Etiam sapien sem at sagittis congue augue massa varius
                sodales sapien undo tempus dolor egestas magna suscipit magna
                tempus aliquet porta sodales augue suscipit luctus neque "</p>
                <div className='item_rating mb-2'>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                < i className='bi bi-star-fill'></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
    </Carousel.Caption>
    </Carousel.Item>
</Carousel>
                    </Row>
                </Container>
            </section>
        </>
    )
}

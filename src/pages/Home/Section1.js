import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from "../../assets/hero/hero-2.png"
import { Link } from 'react-router'
export function Section1() {
    

    return (
        <>
<section className='hero_section'>
<div className="container ">
<div className="row">
<div className="col-lg-7 position-relative">
    <img src={Burger} className='img-fluid' alt='Hero'/>
    <div className='price_badge'>
        <div className='badge_text'>
            <h4 className='only'>Only</h4>
            <h4 className='price'>$6.99</h4>
        </div>
    </div>
</div>
<div className='col-lg-5'>
<div className='hero_text text-center'>
    <h1 className='text-white'>New Burger</h1>
    <h2 className='text-white'>With Onion</h2>
    <p className='text-white pt-2 pb-4'>Feugiat primis ligula risus auctor laoreet augue egestas mauris
                viverra tortor in iaculis pretium at magna mauris ipsum primis
                rhoncus feugiat</p>
                <Link to="/" className='btn btn-warning rounded-0'>Order Now</Link>
</div>
</div>
</div>
</div>
                
            </section>
        </>
    )
}

import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import heroImg from '../images/desktop/image-hero.jpg';

const Wrapper = styled.section`

padding: 5rem;
height: 59rem;
background-size:cover;
gap: 10rem;

h1{
    color: white;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 8rem;
  font-weight:100;
  letter-spacing: 0.1rem;
    width: 70rem;
    border: 2px solid white;
    padding: 2rem;
}


@media screen and (max-width:${({ theme }) => theme.media.tab}) {
    
    
    padding: 5rem 2rem;

    h1{
        font-size: 5rem;
        width: 42rem;
    }
}

@media screen and (max-width:${({ theme }) => theme.media.mob}) {
    
    h1{
        font-size: 4rem;
        width: 35rem;
    }

}
 

`

const Header = () => {

    return (
        <Wrapper style={{ backgroundImage: `url(${heroImg})` }} className='container flex flex-col'>

            <Navbar />

            <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>


        </Wrapper>


    )
}

export default Header
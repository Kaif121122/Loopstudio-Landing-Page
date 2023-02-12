import React from 'react'
import styled from 'styled-components'
import footerLogo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

const Wrapper = styled.section`

padding: 5rem;
background-color:black;

.footer-container{
  gap: 3rem;
}

.footer-logo{
  max-width: 100%;
  height: auto;
}
.social-container{
  gap: 1rem;
  margin-left:auto;
}

.social-icons{
  display: block;
  width: 3rem;
  cursor: pointer;
  overflow: hidden;
  padding: 0.5rem 0;
}

.social-icons:hover{
  margin-bottom:-2px;
  border-bottom: 2px solid white;
}

.common-para{
  color:white;
  font-size: 1.8rem;
}

.my-footer{
  display: flex;
  justify-content: space-between;
  }


@media screen and (max-width:${({ theme }) => theme.media.tab}) {

  padding: 2rem;
  
  .my-footer{
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .nav-ul{
flex-direction: column;
  }

  .social-container{
  margin:auto;
}
}


`

const Footer = () => {

  const date = new Date();

  let currentYear = date.getFullYear();

  return (
    <Wrapper className=''>

      <div className="container my-footer">

        <div className="flex flex-col footer-container">

          <div className="logo">
            <img src={footerLogo} alt="" className="logo-img" />
          </div>

          <div className="nav-bar">
            <ul className="nav-ul flex ">
              <li className="nav-li"><a href="" className="nav-link">About</a></li>
              <li className="nav-li"><a href="" className="nav-link">Careers</a></li>
              <li className="nav-li"><a href="" className="nav-link">Events</a></li>
              <li className="nav-li"><a href="" className="nav-link">Products</a></li>
              <li className="nav-li"><a href="" className="nav-link">Support</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col footer-container">
          <div className="flex social-container">
            <img src={facebook} alt="" className="social-icons" />
            <img src={twitter} alt="" className="social-icons" />
            <img src={pinterest} alt="" className="social-icons" />
            <img src={instagram} alt="" className="social-icons" />
          </div>
          <p className="common-para">@ {currentYear} Loopstudios. All rights reserved.</p>
        </div>

      </div>

    </Wrapper>
  )
}

export default Footer
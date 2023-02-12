import React from 'react'
import styled from 'styled-components'
import vrImg from '../images/desktop/image-interactive.jpg'

import earthImg from '../images/desktop/image-deep-earth.jpg'
import arcadeImg from '../images/desktop/image-night-arcade.jpg'
import soccerImg from '../images/desktop/image-soccer-team.jpg'
import gridImg from '../images/desktop/image-grid.jpg'
import fromUpImg from '../images/desktop/image-from-above.jpg'
import pocketImg from '../images/desktop/image-pocket-borealis.jpg'
import curiosityImg from '../images/desktop/image-curiosity.jpg'
import fishEyeImg from '../images/desktop/image-fisheye.jpg'

const Wrapper = styled.section`

background-color: ${({ theme }) => theme.colors.white};
padding: 5rem;
gap: 6rem;

.vr-section{

display: flex;
align-items: flex-end;
}

.vr-img{
  max-width: 100%;
  height: auto;
}
.vr-heading{
  gap: 2rem;
  width: 60rem;
  background-color:white;
  color: black;
  padding: 3rem 3rem 0;
  transform: translate(-13rem,0);
}

.common-h2{
font-size: 2.5rem;
  font-weight:300;
text-transform:uppercase;
    font-family: 'Josefin Sans', sans-serif;
}

.common-para{
  font-size: 1.5rem;
  font-weight:300;
  line-height: 2.2rem;
  text-transform:capitalize;
    font-family: 'Josefin Sans', sans-serif;
}

.btn-container{
  justify-content: space-between;
  align-items: center;
}

.btn{
  text-transform:uppercase;
  cursor: pointer;
  padding: 1rem 2.5rem;
  font-size: 1.7rem;
  font-weight:300;
  letter-spacing: 0.3rem;
  font-family: 'Josefin Sans', sans-serif;
}

.btn:hover{
  background-color:black;
  color: white;
  transition: all 0.2s ease;
}

.creations-img{
  background-size:cover;
  height: 51.5rem;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
}

.creations-img:hover{
  opacity: 0.8;

  .common-h3{
    color:black;
  }
}

.common-h3{
  text-transform:uppercase;
  font-size: 3rem;
  font-weight:300;
  color: white;
  padding: 3rem;
  font-family: 'Josefin Sans', sans-serif;
}



@media screen and (max-width:${({ theme }) => theme.media.tab}) {

  padding: 2rem;

  .vr-heading{
    width: auto;
  }
}


@media screen and (max-width:${({ theme }) => theme.media.mob}) {
  .btn-container{
    flex-direction: column;
    gap: 3rem;
  }
}
`

const Main = () => {
  return (
    <Wrapper className='flex flex-col container'>

      <div className='vr-section'>
        <div className="leader-vr-container">
          <img className='vr-img' src={vrImg} alt="" />
        </div>
        <div className="vr-heading flex flex-col">
          <h2 className='common-h2'>the leader in interactive vr</h2>
          <p className='common-para'>founded in 2011, loopstudios has been producing world-class virtual real projects for some of the best companies around the globe.Our award winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
      </div>

      <div className="btn-container flex">
        <h2 className="common-h2">our creations</h2>
        <button className="btn">see all</button>
      </div>

      <div className="creations-data-container grid grid-4-col">

        <div style={{ backgroundImage: `url(${earthImg})` }} className=" creations-img">
          <h3 className="common-h3">deep earth</h3>
        </div>

        <div style={{ backgroundImage: `url(${arcadeImg})` }} className="creations-img">
          <h3 className="common-h3">night arcade</h3>
        </div>

        <div style={{ backgroundImage: `url(${soccerImg})` }} className="creations-img">
          <h3 className="common-h3">soccer team vr</h3>
        </div>

        <div style={{ backgroundImage: `url(${gridImg})` }} className="creations-img">
          <h3 className="common-h3">the grid</h3>
        </div>

        <div style={{ backgroundImage: `url(${fromUpImg})` }} className="creations-img">
          <h3 className="common-h3">from up above vr</h3>
        </div>

        <div style={{ backgroundImage: `url(${pocketImg})` }} className="creations-img">
          <h3 className="common-h3">pocket borealis</h3>
        </div>

        <div style={{ backgroundImage: `url(${curiosityImg})` }} className="creations-img">
          <h3 className="common-h3">the curiosity</h3>
        </div>

        <div style={{ backgroundImage: `url(${fishEyeImg})` }} className="creations-img">
          <h3 className="common-h3">make it fisheye</h3>
        </div>


      </div>

    </Wrapper>
  )
}

export default Main
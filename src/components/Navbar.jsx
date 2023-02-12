
import styled from 'styled-components'
import logoImg from '../images/logo.svg'
import openMenu from '../images/icon-hamburger.svg'
import closeMenu from '../images/icon-close.svg'
import { useState } from 'react'

const Wrapper = styled.section`
width: 100%;
justify-content: space-between;

.logo-img{
    max-width:100%;
    height: auto;
    z-index: 999;
}

.menu-icons{
  display: none;

}



@media screen and (max-width:${({ theme }) => theme.media.tab}) {

  .menu-icons{
  display: block;
  position: absolute;
  top: 6rem;
  right: 5rem;
  z-index: 99;
}

.close-icon{
  display: none;
}


.nav-ul{
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
position: absolute;
inset: 0;
background-color: rgba(0,0,0,0.8);
z-index: 9;
touch-action: none;
display: none;

}

.nav-link{
  font-size: 4rem;
  text-transform:uppercase;
}

.none{
  display: none;
}

.block{
  display: block !important;
}
    
}

`

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  return (
    <Wrapper className='flex container'>

      <div className="logo">
        <img src={logoImg} alt="" className="logo-img" />
      </div>

      <div className="nav-bar">
        <div className="hamburger">
          <img onClick={() => setMenu(true)} src={openMenu} alt="" className={menu ? 'none' : "menu-icons open-icon"} />
          <img onClick={() => setMenu(false)} src={closeMenu} alt="" className={menu ? 'block menu-icons' : "menu-icons close-icon"} />
        </div>
        <ul className={menu ? "nav-ul flex" : "nav-ul"}>
          <li onClick={() => setMenu(false)} className="nav-li"><a href="" className="nav-link">About</a></li>
          <li onClick={() => setMenu(false)} className="nav-li"><a href="" className="nav-link">Careers</a></li>
          <li onClick={() => setMenu(false)} className="nav-li"><a href="" className="nav-link">Events</a></li>
          <li onClick={() => setMenu(false)} className="nav-li"><a href="" className="nav-link">Products</a></li>
          <li onClick={() => setMenu(false)} className="nav-li"><a href="" className="nav-link">Support</a></li>
        </ul>
      </div>

    </Wrapper>
  )
}

export default Navbar
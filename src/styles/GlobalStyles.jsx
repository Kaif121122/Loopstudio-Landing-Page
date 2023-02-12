import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;

}

html {
    font-size:62.5%;
    font-family: 'Alata', sans-serif;
}

.container{
    max-width:144rem;
    margin: 0 auto;

}

.nav-ul{
    display:flex;
    gap:2rem;
}

.nav-li{
    list-style: none;
  }
  
  .nav-link{
      font-size: 2rem;
      text-decoration:none;
      color:white;
      padding:0.5rem 0;
  }

  .nav-link:hover{
    border-bottom:2px solid white;
  }

.flex{
    display:flex !important;

}

.flex-col{
    flex-direction:column;
}

.item-center{
    justify-content:center;
    align-items:center;
}

.grid{
    display:grid;
    gap:2rem;
}

.grid-4-col{
    grid-template-columns:repeat(auto-fit,minmax(25rem,1fr));
}

@media screen and (max-width:${({ theme }) => theme.media.laptop}) {
    
    html{
        font-size:55%;
    }

    .vr-section{

        flex-direction:column;
    flex-wrap: wrap;
    align-items:center !important;
        }

    .vr-heading{
        
  transform: translate(0,0) !important;
  text-align:center;
    }
}


@media screen and (max-width:${({ theme }) => theme.media.mob}) {

    html{
        font-size:50%;
    }

}

`
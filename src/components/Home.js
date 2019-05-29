import React from 'react';
import Styled from 'styled-components'

import banner from '../images/banner.jpg'

const Home = () => {
    return (

        <div>
            <BANNER>
                <div className="layer">
                      <h3 className="banner-title">The Choice for Busy Professionals</h3>
                </div>
            </BANNER>
            <div>
                 asfasdf
            </div>
        </div>
    )
}

export default Home;

const BANNER = Styled.div `
  background-image: url(${banner});
  background-position: center;
  height: 700px;
  position: relative;
  clip-path: polygon(0 0%, 100% 0, 100% 88%, 0% 100%);


   .layer {
      background-color: rgba(0,0,0, .4);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 3rem;
      color: white;
   }
  
   h3 {
       position: absolute;
       top: 50%;
       right: 50%;
       transform: translate(50%, -100%)
   }
`
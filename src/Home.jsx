import React from 'react';
import Common from './Common';
import Homeimg from '../src/img/Mobile Marketing-cuate.svg';

const Home = () => {
    return (
        <>
           <Common name='Grow your business with' imgsrc={Homeimg}  visit='/service' btnname='get started' />
        </>
    )
}
export default Home;
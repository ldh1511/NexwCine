import React from 'react';
import BannerBox from './BannerBox';
import Event from './Event';
import Homeslide from './Homeslide';
import Loading from './Loading';
const Home = ({ data }) => {
    if (data) {
        return (
            <div className='home-container'>
                <BannerBox />
                {/* <Homeslide /> */}
                <Event />
            </div>
        )
    }
    else {
        return <Loading />
    }
}
export default Home;
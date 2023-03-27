import React from 'react';
import HeroSlider from '../Components/HeroSlider';


function Home(props) {

    return (
        <div>
            <section class="container mx-auto flex space-x-8 pt-20">
                <div class="w-1/3">
                    <img src={require('../Images/side-banner-01.webp')} />
                </div>
                <div class="w-2/3">
                    <HeroSlider />
                </div>
            </section>
        </div>
    );
}

export default Home;
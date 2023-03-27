import React from 'react';
import Slider from "react-slick";
function HeroSlider(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div class="container mx-auto">

            <Slider {...settings}>
                <div>
                    <img src={require('../Images/slider-01.webp')} />
                </div>
                <div>
                    <img src={require('../Images/slider-02.webp')} />
                </div>
                <div>
                    <img src={require('../Images/slider-03.webp')} />
                </div>
            </Slider>
        </div>
    );
}

export default HeroSlider;
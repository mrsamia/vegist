import React from 'react';
import Slider from "react-slick";
import ShopNowBtn from './ShopNowBtn';
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
                <div class="relative">

                    <img src={require('../Images/slider-01.webp')} />
                    <div class="absolute inset-y-1/3 ">
                        <div>
                            <p class="text-lg text-[#f0a843] text-left font-medium pl-16">First 10 sales 10% offer</p>
                        </div>
                        <div className='pt-5'>
                            <h2 class="text-[50px] text-[#232323] font-semibold text-left  pl-16 leading-none">Enjoying<br></br>grocery</h2>
                        </div>
                        <div className='pt-8'>
                            <ShopNowBtn/>
                        </div>
                    </div>


                </div>
                <div class="">
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
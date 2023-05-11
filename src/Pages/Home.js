import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import SectionTitle from '../Components/SectionTitle';
import ShopNowBtn from '../Components/ShopNowBtn';
import CategorySlider from '../Components/CategorySlider';


function Home(props) {

    return (
        <div>
            <section class="container mx-auto flex space-x-8 pt-20 justify-center">
                <div class="relative">
                    <img class="w-80 min-h-full" src={require('../Images/side-banner-01.webp')} />
                    <div class="absolute bottom-10 inset-x-0  ">
                        <div>
                            <p class="text-[28px] font-semibold pb-3">Vegetable <br></br>Supermarket</p>
                        </div>
                        <div>
                            <ShopNowBtn />
                        </div>
                    </div>
                </div>
                <div class="w-2/3">
                    <HeroSlider />
                </div>
            </section>
            <section>
                <SectionTitle name="Shop by category" />
                <div className='flex justify-center pb-10 pt-10'>
                    <CategorySlider />
                </div>


            </section>
        </div>
    );
}

export default Home;
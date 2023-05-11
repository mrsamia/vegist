import React from 'react';
import Slider from "react-slick";

function CategorySlider(props) {
    const data=[
        {
            img:require('../Images/Sm_images/lichi.avif'),
            name:"Fresh meat"
        },
        {
            img:require('../Images/Sm_images/2.avif'),
            name:"Fresh meat"
        },
        {
            img:require('../Images/Sm_images/3.avif'),
            name:"Fresh meat"
        }

    ]
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='container mx-auto'>
        <Slider {...settings}>
          <div>
          <div className='border px-7 py-7 w-52'>
            <div className='flex justify-center'>
            <img src={require('../Images/Sm_images/lichi.avif')} />
            </div>
            <div>
                <p>Fresh meat</p>
            </div>
        </div>
          </div>

          <div>
          <div className='border px-7 py-7 w-52'>
            <div className='flex justify-center'>
            <img src={require('../Images/Sm_images/2.avif')} />
            </div>
            <div>
                <p>Fresh meat</p>
            </div>
        </div>
          </div>

          <div>
          <div className='border px-7 py-7 w-52'>
            <div className='flex justify-center'>
            <img src={require('../Images/Sm_images/3.avif')} />
            </div>
            <div>
                <p>Fresh meat</p>
            </div>
        </div>
          </div>

          <div>
          <div className='border px-7 py-7 w-52'>
            <div className='flex justify-center'>
            <img src={require('../Images/Sm_images/4.avif')} />
            </div>
            <div>
                <p>Fresh meat</p>
            </div>
        </div>
          </div>
         
          <div>
            <div className='border px-7 py-7 w-52'>
            <div className='flex justify-center'>
            <img src={require('../Images/Sm_images/5.webp')} />
            </div>
            <div>
                <p>Fresh meat</p>
            </div>
        </div>
          </div>

          <div>
            <div className='border px-7 py-7 w-52'>
            <div className='flex justify-center'>
            <img src={require('../Images/Sm_images/7.webp')} />
            </div>
            <div>
                <p>Fresh meat</p>
            </div>
        </div>
          </div>

          <div>
          <div className='border px-7 py-7 w-52'>
            <div className='flex justify-center'>
            <img src={require('../Images/Sm_images/8.avif')} />
            </div>
            <div>
                <p>Fresh meat</p>
            </div>
        </div>
          </div>
        </Slider>
        </div>
    );
}

export default CategorySlider;
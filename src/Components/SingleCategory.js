import React from 'react';

function SingleCategory(props) {
    return (
        <div className='border px-7 py-7 w-52'>
            <div className='flex justify-center'>
            <img src={require('../Images/Sm_images/lichi.avif')} />
            </div>
            <div>
                <p>Fresh meat</p>
            </div>
        </div>
    );
}

export default SingleCategory;
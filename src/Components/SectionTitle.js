import React from 'react';

function SectionTitle(props) {
    return (
        <div>
             <h1 class="text-3xl pt-20 font-semibold pb-30">{props.name}</h1>
        </div>
    );
}

export default SectionTitle;
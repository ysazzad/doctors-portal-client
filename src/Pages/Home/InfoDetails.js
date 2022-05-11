import React from 'react';

const InfoDetails = ({ img, cardTitle, bgClass }) => {
    return (
        <div class={`card lg:card-side bg-primary shadow-xl ${bgClass} `}>
            <figure className="pl-5 pt-5"><img src={img} alt="Album" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default InfoDetails;
import React from 'react';
import "./Features.css";
import SingleFeatures from './SingleFeatures';
import sections from '../../constants/data';

const Feature = () => {
    return (
        <section className='features section-p bg-black' id = "features">
        <div className='container'>
            <div className='features-content'>
                <div className='item-list text-white'>
                    {
                        sections.features.map(feature => {
                            return (
                                <SingleFeatures key = {feature.id} {...feature} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
    );
};

export default Feature;
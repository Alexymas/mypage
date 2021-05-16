import React from 'react'
import './Slider.css'

export const slidesInfo = [
    {
        src: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg',
        alt: 'Project 1',
        desc: 'CRUD APP in Node.Js',
        link: 'https://caelumcrud.herokuapp.com'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg',
        alt: 'Project 2',
        desc: 'Project 2',
        link: 'https://alexymas.github.io/proyectocrud/'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg',
        alt: 'Project 3',
        desc: 'Project 3'
    }
];

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <a href={slide.link}><img src={slide.src} alt={slide.alt} /></a>
        <div className="slide-desc">
            <span>{slide.desc}</span>

        </div>
    </div>
));

export default slides;
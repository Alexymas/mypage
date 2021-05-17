import React from 'react'
import { RiCodeBoxFill } from "react-icons/ri";
import './Slider.css'
import ss1 from '../../media/indexed.PNG'

export const slidesInfo = [
    {
        src: ss1,
        alt: 'Project 1',
        desc: 'CRUD APP in Node.Js',
        link: 'https://caelumcrud.herokuapp.com'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg',
        alt: 'Project 2',
        desc: 'CRUD IndexedDB',
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
        <a href={slide.link} rel="noreferrer" target="_blank" ><img className="images" src={slide.src} alt={slide.alt} /></a>
        <div className="slide-desc">
            <span>{slide.desc}</span>
            <span><RiCodeBoxFill className="span-icons"/></span>
        </div>
    </div>
));

export default slides;
import React from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagem1 from './Filme1.jpg'
import imagem2 from './Filme2.jpg'
import imagem3 from './Filme3.jpg'
import imagem4 from './Filme4.jpg'
import imagem5 from './Filme5.jpg'
import imagem6 from './Filme6.jpg'
import imagem7 from './Filme7.jpg'
import imagem8 from './Filme8.jpg'
import imagem9 from './Filme9.jpg'
import imagem10 from './Filme10.jpg'
import imagem11 from './Filme11.jpg'
import './Carrosel.css'

    const Carrossel = () => {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,

};


    return (
        <div>
            <div className="carousel-container">

                <Slider {...settings}>
                    <div>
                        <img src={imagem1} alt="" />
                    </div>
                    <div>
                        <img src={imagem2} alt="" />
                    </div>
                    <div>
                        <img src={imagem3} alt="" />
                    </div>
                    <div>
                        <img src={imagem4} alt="" />
                    </div>
                    <div>
                        <img src={imagem5} alt="" />
                    </div>
                    <div>
                        <img src={imagem6} alt="" />
                    </div>
                    <div>
                        <img src={imagem7} alt="" />
                    </div>
                    <div>
                        <img src={imagem8} alt="" />
                    </div>
                    <div>
                        <img src={imagem9} alt="" />
                    </div>
                    <div>
                        <img src={imagem10} alt="" />
                    </div>
                    <div>
                        <img src={imagem11} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Carrossel;
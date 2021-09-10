import React, {useState} from 'react'
import Img2 from "./dist/gallery/pic-2.jpg"
import Img3 from "./dist/gallery/pic-3.jpg"
import Img4 from "./dist/gallery/pic-4.jpg"
import Img5 from "./dist/gallery/pic-5.jpg"
import Img6 from "./dist/gallery/pic-6.jpg"
import Img7 from "./dist/gallery/pic-7.jpg"
import Img8 from "./dist/gallery/pic-8.jpg"
import Img9 from "./dist/gallery/pic-9.jpg"
import Img10 from "./dist/gallery/pic-10.jpg"
import Img11 from "./dist/gallery/pic-11.jpg"
import Img12 from "./dist/gallery/pic-12.jpg"
import Img13 from "./dist/gallery/pic-13.jpg"
import Img14 from "./dist/gallery/pic-14.jpg"
import Img15 from "./dist/gallery/pic-15.jpg"
import Img16 from "./dist/gallery/pic-16.jpg"
import Img17 from "./dist/gallery/pic-17.jpg"

import "./Gallery.css"

const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img2
        },
        {
            id: 2,
            imgSrc: Img3
        },
        {
            id: 3,
            imgSrc: Img4
        },
        {
            id: 4,
            imgSrc: Img5
        },
        {
            id: 5,
            imgSrc: Img6
        },
        {
            id: 6,
            imgSrc: Img7
        },
        {
            id: 7,
            imgSrc: Img8
        },
        {
            id: 8,
            imgSrc: Img9
        },
        {
            id: 9,
            imgSrc: Img10
        },
        {
            id: 10,
            imgSrc: Img11
        },
        {
            id: 11,
            imgSrc: Img12
        },
        {
            id: 12,
            imgSrc: Img13
        },
        {
            id: 13,
            imgSrc: Img14
        },
        {
            id: 14,
            imgSrc: Img15
        },
        {
            id: 15,
            imgSrc: Img16
        },
        {
            id: 16,
            imgSrc: Img17
        },
    ]

    const [modal , setModal] = useState(false);
    const [tempimgSrc , setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModal(true);
    }

    return (
        <>
        <div className={ modal ? "model open" : "model" }>
            <img src={tempimgSrc} alt="modal-image"/>
            <span class="material-icons" onClick={() => setModal(false)}>
                close
            </span>
        </div>

        <div className="gallery pt-5 ">
           <div className="gallery__header d-flex justify-content-center mb-5">
                <h1 className="font-play border-bottom">Gallery</h1>
           </div>
           {/* Gallery Cards */}
           <div className="container">
                <div className="gallery__cards">
                    {
                        data.map((item, index) => (
                            <div className="pics" key={index} onClick={ () => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} alt="gallery-image" style={{width: '100%'}}/>
                            </div>
                        ))
                    }
                </div>
           </div>
        </div>
        </>
    )
}

export default Gallery

import React, { useState } from 'react'
import "./Products.css"
import pic1 from "./dist/img/pic-1.jpg"
import pic2 from "./dist/img/pic-2.jpg"
import pic3 from "./dist/img/pic-3.jpg"
import pic4 from "./dist/img/pic-4.jpg"
import pic6 from "./dist/img/pic-6.jpg"
import pic7 from "./dist/img/pic-7.jpg"
import pic8 from "./dist/img/pic-8.jpg"
import pic9 from "./dist/img/pic-9.jpg"
import pic10 from "./dist/img/pic-10.jpg"
import pic11 from "./dist/img/pic-11.jpg"
import pic12 from "./dist/img/pic-12.jpg"
import pic14 from "./dist/img/pic-14.jpg"
import pic15 from "./dist/img/pic-15.jpg"
import pic16 from "./dist/img/pic-16.jpg"
import pic17 from "./dist/img/pic-17.jpg"
import pic18 from "./dist/img/pic-18.jpg"
import pic19 from "./dist/img/pic-19.jpg"
import pic20 from "./dist/img/pic-20.jpg"
import pic21 from "./dist/img/pic-21.jpg"
import pic22 from "./dist/img/pic-22.jpg"
import pic23 from "./dist/img/pic-23.jpg"
import pic24 from "./dist/img/pic-24.jpg"
import pic25 from "./dist/img/pic-25.jpg"

const Products = () => {

   
    const data1= [
        {
            imgSrc: pic6
        },
        {
            imgSrc: pic7
        },
        {
            imgSrc: pic12
        },
        {
            imgSrc: pic8
        },
        {
            imgSrc: pic9
        },
        {
            imgSrc: pic10
        },
        {
            imgSrc: pic11
        },
    ]

    const data2 = [
        {
            imgSrc: pic14
        },
        {
            imgSrc: pic15
        },
        {
            imgSrc: pic16
        },
        {
            imgSrc: pic17
        },
        {
            imgSrc: pic18
        },
        {
            imgSrc: pic19
        },
        {
            imgSrc: pic20
        },
        {
            imgSrc: pic21
        },
    ]

    const data3 = [
        {
            imgSrc: pic1
        },
        {
            imgSrc: pic2
        },
        {
            imgSrc: pic3
        },
        {
            imgSrc: pic4
        },
    ]

    const data4 = [
        {
            imgSrc: pic22
        },
        {
            imgSrc: pic23
        },
        {
            imgSrc: pic24
        },
        {
            imgSrc: pic25
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
        {/* Picture Modal */}
        <div className={ modal ? "model open" : "model" }>
            <img src={tempimgSrc} alt="modal-image"/>
            <span class="material-icons" onClick={() => setModal(false)}>
                close
            </span>
        </div>

        <div className="products pt-5 ">
            
            {/* Page Heading */}
            <div className="products__header d-flex justify-content-center mb-5 mt-5">
                <h1 className="font-play font-50 text-white border-bottom-white">Products</h1>
            </div>

            <div className="container-fluid">
                {/* Product Slogan Heading */}
                <div className="row justify-content-center mb-5">
                    <div className="container-fluid px-5 p-3">
                        <h3 className="font-dosis font-50 text-center text-white"><b>Explore what's new in store</b></h3>
                    </div>
                </div>

                {/* Products */}
                <div className="row mb-5 row__productCards">
                    <div className="col-md-7 cardProducts mb-5">
                        {
                            data1.map((item, index) => (
                                <div className="pics" key={index} onClick={ () => getImg(item.imgSrc)}>
                                    <img src={item.imgSrc} alt="gallery-image" style={{width: '100%'}}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-5 mb-5">
                        <div className="card proCard p-5 border-0">
                            <h2 className="card-title font-dosis font-50 border-bottom mb-5">Cloud Service Patrol System</h2>
                            <p className="card-text font-description ">Patrol system has come to a long way. In year 2019 patrol system has developed using cloud services where management team or client could remotely access the patrol system over the internet in realtime from PC or smart phone devices. </p>
                        </div>
                    </div>
                </div>

                {/* Products */}
                <div className="row mb-5 row__productCards">
                    <div className="col-md-5 mb-5">
                        <div className="card proCard  p-5 border-0 ">
                            <h2 className="card-title font-dosis font-50 border-bottom mb-5">Traditional Patrol System</h2>
                            <p className="card-text font-description ">Traditional Patrol System it is suitable for situation where internet are not available. management team has to download the data from the patrol device to a nearby computer for patrol overview. </p>
                        </div>
                    </div>
                    <div className="col-md-7 cardProducts mb-5">
                        {
                            data2.map((item, index) => (
                                <div className="pics" key={index} onClick={ () => getImg(item.imgSrc)}>
                                    <img src={item.imgSrc} alt="gallery-image" style={{width: '100%'}}/>
                                </div>
                            ))
                        }
                    </div>
                </div>

                 {/* Products */}
                 <div className="row mb-5 row__productCards">
                   
                    <div className="col-md-7 cardProducts mb-5">
                        {
                            data3.map((item, index) => (
                                <div className="pics" key={index} onClick={ () => getImg(item.imgSrc)}>
                                    <img src={item.imgSrc} alt="gallery-image" style={{width: '100%'}}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-5 mb-5">
                        <div className="card proCard bg-primary-2 text-white  p-5 border-0 ">
                            <h2 className="card-title font-dosis font-50 border-bottom-white mb-5">Cloud access Alarm System</h2>
                            <p className="card-text font-description ">the Advantage of alarm system using GSM or Wifi to remotely control system setting. User not longer has to be next to the main system for operation. it can be remotely control over the internet.</p>
                        </div>
                    </div>
                </div>

                 {/* Products */}
                 <div className="row mb-5 row__productCards  border-bottom">
                    <div className="col-md-5 mb-5">
                        <div className="card proCard bg-primary-2 text-white p-5 border-0 ">
                            <h2 className="card-title font-dosis font-50 border-bottom-white mb-5">One click Alarm system</h2>
                            <p className="card-text font-description ">The one click Alarm system are best for trouble free setup. it easy to use with a push of a button.</p>
                        </div>
                    </div>
                    <div className="col-md-7 cardProducts mb-5">
                        {
                            data4.map((item, index) => (
                                <div className="pics" key={index} onClick={ () => getImg(item.imgSrc)}>
                                    <img src={item.imgSrc} alt="gallery-image" style={{width: '100%'}}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
           
                 {/* Product Footer Info */}
                 <div className="row justify-content-center mb-5">
                    <div className="container-fluid px-5 p-3">
                        <h3 className="font-dosis font-20 text-center "><b>For more information on above products please contact us for live demo!!</b></h3>
                    </div>
                </div>
           </div>
        </div>
        </>
    )
}

export default Products

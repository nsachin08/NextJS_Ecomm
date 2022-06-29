import { useState,useEffect } from "react";
import {FaArrowLeft,FaArrowRight} from "react-icons/fa"
import Image from 'next/image'
import Banner1 from "../BannerImages/Banner1.jpg"
import Banner2 from "../BannerImages/Banner2.jpg"

const Slider = () =>{

    const [index,setIndex] = useState(0);
    const images =[Banner1,Banner2]

    useEffect(() =>{
        const lastIndex = images.length - 1;
        if(index < 0)
        {
            setIndex(lastIndex)
        }
        if(index > lastIndex)
        {
            setIndex(0)
        }
    },[index,images])


    useEffect(() =>{
        let slider = setInterval(() =>{
            setIndex(index+1);
        },5000)

        return () =>{
            clearInterval(slider)
        }
    },[index])


    return (
        <div className="section">
            <div className="section-center">

                {images.map((image,indexImage) =>{
                    let position = "nextSlide";
                    if(indexImage === index)
                    {
                        position = "activeSlide"
                    }
                    if(indexImage === index -1 || (index === 0 && indexImage === images.length -1))
                    {
                        position = "lastSlide"
                    }

                    return (
                        <article className={position} key={indexImage}>
                            <Image src={image} alt="banner_img" className="banner-img" width="1900" height="900" objectFit="contain"  ></Image>
                        </article>
                    )
                })}
                <p className="prev" onClick={() => setIndex(index-1)}>
                    <FaArrowLeft/>
                </p>
                <p className="next" onClick={() => setIndex(index+1)}>
                    <FaArrowRight/>
                </p>
            </div>
        </div>
    )
}

export default Slider

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import imagem1 from '../../../../public/images/ImgBanner/Banner1.jpg';
import imagem2 from '../../../../public/images/ImgBanner/Banner2.jpg';
import imagem3 from '../../../../public/images/ImgBanner/Banner3.jpg';
import imagem1Mobile from '../../../../public/images/ImgBanner/Imagem1Mobile.png';
import imagem3Mobile from '../../../../public/images/ImgBanner/Imagem3Mobile.png';


const images = [
    { desktop: imagem1.src, mobile: imagem1Mobile.src },
    { desktop: imagem2.src, mobile: imagem2.src },
    { desktop: imagem3.src, mobile: imagem3Mobile.src },
  ];

  const Banner1 = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const timeoutRef = React.useRef(null)
  
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  
    const previousSlide = () => {
      if (currentSlide === 0) {
        setCurrentSlide(images.length - 1)
      } else {
        setCurrentSlide(currentSlide - 1)
      }
    }
  
    const nextSlide = () => {
      if (currentSlide === images.length - 1) {
        setCurrentSlide(0)
      } else {
        setCurrentSlide(currentSlide + 1)
      }
    }
  
    useEffect(() => {
      resetTimeout()
      timeoutRef.current = setTimeout(
        () =>
          setCurrentSlide((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        2500
      )
  
      return () => {
        resetTimeout()
      }
    })
    return (
        <div className={styles.bannerContainer}>
          <div className={styles.leftArrow} onClick={previousSlide}>
            &#10094;
          </div>
          <div className={styles.rightArrow} onClick={nextSlide}>
            &#10095;
          </div>
          <div>
            {images
              .filter((img, index) => {
                return index === currentSlide
              })
              .map((img, index) => {
                return (
                  <picture key={index}>
                    <source srcSet={img.mobile} media="(max-width: 768px)" />
                    
                    <img src={img.desktop} alt="banner" />
                  </picture>
                )
              })}
          </div>
          <div className={styles.slideBadges}>
            {images.map((img, index) => {
              return (
                <span
                  key={index}
                  className={index === currentSlide ? styles.active : ''}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              )
            })}
          </div>
        </div>
      )
  
  }
  export default Banner1;
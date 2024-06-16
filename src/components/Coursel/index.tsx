'use client'
import { images } from '@/utils/const'
import React, { useCallback, useEffect, useState } from 'react'
import CarouselComponent from './components/CarouselComponent';

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [showedCount, setShowedCount] = useState(3)

    useEffect(() => {
        const updatedShowedCount = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setShowedCount(1);
            } else if (width < 1000) {
                setShowedCount(2);
            } else {
                setShowedCount(3);
            }
        }
        updatedShowedCount();
        window.addEventListener('resize', updatedShowedCount);

        return () => {
            window.removeEventListener('resize', updatedShowedCount);
        };

    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            selectNewImage(true);
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, [currentIndex]);

    const selectNewImage = (next: boolean) => {
        setCurrentIndex((prevIndex) => {
            if (next) {
                return (prevIndex + 1) % images.length;
            } else {
                return (prevIndex - 1 + images.length) % images.length;
            }
        });
    }

    const goToImage = (slideIndex: any) => {
        setCurrentIndex(slideIndex)
    }

    const getImagesToShow = useCallback(() => {
        const imagesToShow = [];
        for (let i = 0; i < showedCount; i++) {
            imagesToShow.push(images[(currentIndex + i) % images.length]);
        }
        return imagesToShow;
    }, [currentIndex, showedCount]);

    const displayedImages = getImagesToShow();

    return (
        <CarouselComponent
            images={images}
            goToImage={goToImage}
            selectNewImage={selectNewImage}
            displayedImages={displayedImages}
        />
    )
}

export default Carousel

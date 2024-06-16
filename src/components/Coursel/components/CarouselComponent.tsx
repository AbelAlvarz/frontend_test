import React from 'react'
import Image from 'next/image'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { ImageModel } from '@/utils/const';

interface Props {
    images: ImageModel[];
    goToImage: any;
    selectNewImage: (isNext: boolean) => void;
    displayedImages: any;
}

const CarouselComponent = ({ images, goToImage, displayedImages, selectNewImage }: Props) => {
    const prevImage = () => {
        selectNewImage(false)
    }

    const nextImage = () => {
        selectNewImage(true)
    }
    return (
        <div className='max-w-[90%]  md:h-[80vh] w-full m-auto px-0 py-0 relative rounded-t-lg md:bg-slate-300'>
            <div className="flex flex-col md:flex-row w-full h-[100%] md:px-10 md:py-5 items-center justify-center ">
                {
                    displayedImages.map((img: ImageModel, index: number) => (
                        <div key={index} className="w-full md:w-1/2 md:h-full h-[80vh] md:max-h-[80vh] rounded-2xl bg-center bg-cover bg-slate-50 shadow-2xl duration-500 mx-2 m:0 md:mt-2 block">
                            <Image
                                width={300}
                                height={400}
                                src={img.url}
                                priority
                                className='w-full h-1/2 object-cover '
                                alt='image'
                            />
                            <div className="w-full md:h-1/2 p-2 flex flex-col justify relative mb-5">
                                <h1 className='font-bold text-lg '>{img.title}</h1>
                                <p className='overflow-auto custom-scroll '>{img.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="w-full flex justify-center rounded-b-lg  md:bg-slate-300 mb-5">
                {images.map((image: ImageModel, index: number) => (
                    <button
                        key={index}
                        onClick={() => goToImage(index)}
                        style={{ zIndex: 1000 }}
                        className={`transition-all m-2 w-3 h-3= p-2 rounded-full ${displayedImages.includes(image) ? 'bg-black' : 'bg-black bg-opacity-50'}`}
                    ></button>
                ))}
            </div>

            <div className=' group-hover:block absolute top-1/2 transform -translate-y-[50px] left-0 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevImage} size={30} />
            </div>
            <div className=' group-hover:block absolute top-1/2 transform -translate-y-[50px] right-0 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextImage} size={30} />
            </div>
        </div>
    )
}

export default CarouselComponent

import Image from 'next/image'
import React from 'react'

const EnvelopImage = () => {
    return (
        <div className="flex justify-center mb-4 h-1/2">
            <Image
                src='https://storage.googleapis.com/technicaltestfrontend/newsletter_img/envelo.png'
                alt='Envelop Image'
                className='md:w-80 md:h-44 w-full '
                width={200}
                height={150}
            />
        </div>
    )
}

export default EnvelopImage

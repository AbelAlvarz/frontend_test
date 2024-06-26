import React from 'react'
import { ClipLoader } from 'react-spinners'
import { IoMdClose } from 'react-icons/io'
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
    responseMessage: {
        success: boolean,
        message: string
    },
    handler: any
}

const LoadingComponent = ({ responseMessage, handler }: Props) => {
    return (
        <div className="absolute bg-black/90 bg-opacity-75 w-full h-full top-0 left-0 rounded-lg  flex justify-center items-center">
            {
                responseMessage.message ? (
                    <div className='flex flex-col justify-center items-center p-20'>
                        {responseMessage.success ? <FaCheck color='white' fontSize={70} /> : <IoCloseSharp color='white' fontSize={70} />}
                        <h1 className='text-white text-bold text-2xl text-center'>{responseMessage.message}</h1>
                    </div>
                ) : (
                    <ClipLoader color="#4A90E2" size={50} />
                )
            }
            <div className='mt-4 top-0 right-[5%] absolute' style={{ zIndex: 1000 }}>
                <button onClick={handler} className="text-gray-500 hover:text-gray-700">
                    <IoMdClose size={24} />
                </button>
            </div>
        </div>
    )
}

export default LoadingComponent

import { dismissSubscription } from '@/store/slice'
import InputButton from '@/syted-component/InputButton'
import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import LoadingComponent from './LoadingComponent'
import EnvelopImage from './EnvelopImage'

interface Props {
    isVisible: boolean;
    loading: boolean;
    setIsVisible: (value: boolean) => void;
    handleEmpties: (e: any) => void;
    handleStopPetition: () => void;
    setEmail: (e: string) => void;
    message: string;
    responseMessage: {
        success: boolean;
        message: string
    }
}
const NewsLetterComponent = ({ isVisible, loading, setIsVisible, handleEmpties, handleStopPetition, message, setEmail, responseMessage }: Props) => {
    const dispatch = useDispatch()

    const handleDismissSubscription = () => {
        dispatch(dismissSubscription(false))
        setIsVisible(false)

    }
    return (
        <React.Fragment>
            {isVisible && (
                <div style={{ zIndex: 1000 }} className={` fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 `}>
                    <div style={{ zIndex: 1001 }} className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative md:h-min h-[90vh] m-2">

                        {loading && (<LoadingComponent responseMessage={responseMessage} handler={handleStopPetition} />)}
                        <EnvelopImage />
                        <h1 className="text-2xl font-bold mb-2 md:text-center ">Subscribe to our Newsletter</h1>
                        <p className="mb-4 md:text-center ">Subscribe to our newsletter so we can spam you with our most recent offers and discounts.</p>

                        <form onSubmit={(e) => handleEmpties(e)} className="space-y-4">
                            {message && <small className="text-red-500">{message}</small>}
                            <InputButton
                                onChange={(e) => setEmail(e.target.value)}
                                label='Subscribe'
                                inactive={loading} />
                        </form>

                        <div className="mt-4 m-auto">
                            <button
                                onClick={handleDismissSubscription}
                                className="w-full m-auto py-2 ">
                                <p className='hover:underline text-gray-700'> No. I would prefer to waste money</p>
                            </button>
                        </div>

                        <div className="mt-4 top-0 right-[5%] absolute">
                            <button onClick={() => setIsVisible(false)} className="text-gray-500 hover:text-gray-700">
                                <IoMdClose size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}
export default NewsLetterComponent

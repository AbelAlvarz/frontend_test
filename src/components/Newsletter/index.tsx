'use client'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmSubscribtion } from '@/store/slice';
import NewsLetterComponent from './components/NewsLetterComponent';

const NewLetter = () => {

    const isSubscribed = useSelector((state: any) => state.subscription.isSubscribed)
    const dispatch = useDispatch()

    const [isVisible, setIsVisible] = useState(!isSubscribed);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('');

    const cancelRef = useRef(false);

    const handleEmpties = (e: any) => {
        e.preventDefault();
        if (email === '' || !email.includes('@') || !email.includes('.')) {
            setMessage('Please enter a valid email.')
            setTimeout(() => { setMessage('') }, 2000)
            return;
        }
        handleSubmit();
    }

    const handleSubmit = async () => {
        setLoading(true)
        cancelRef.current = false
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                console.log('interval');
                resolve();
            }, 3000);
        });

        if (!cancelRef.current) {
            dispatch(confirmSubscribtion());
            setSuccessMessage(`Welcome to our NewsLetter ${email}`);
        }
    }

    const handleStopPetition = () => {
        cancelRef.current = true
        setLoading(false)
        if (successMessage) {
            setIsVisible(false)
        }
    }

    return (
        <NewsLetterComponent
            isVisible={isVisible}
            loading={loading}
            setIsVisible={setIsVisible}
            handleEmpties={handleEmpties}
            handleStopPetition={handleStopPetition}
            message={message}
            setEmail={setEmail}
            successMessage={successMessage}
        />
    )
}

export default NewLetter

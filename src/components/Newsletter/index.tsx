'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmSubscribtion } from '@/store/slice';
import NewsLetterComponent from './components/NewsLetterComponent';
import { sendEmail } from '@/lib/api';

const NewLetter = () => {

    const isSubscribed = useSelector((state: any) => state.subscription)
    const dispatch = useDispatch()

    console.log(!isSubscribed)
    const [isVisible, setIsVisible] = useState(true);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('');

    const cancelRef = useRef(false);

    useEffect(() => {
        if (isSubscribed) {
            setIsVisible(false)
        }
    }, [])

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
        const response = await sendEmail({ email: email })

        if (!cancelRef.current && response.ok) {
            dispatch(confirmSubscribtion(true));
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

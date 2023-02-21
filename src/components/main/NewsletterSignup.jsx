import axios from 'axios'
import { useState } from 'react'

const {
    VITE_REACT_API: apiUrl,
} = import.meta.env

export default function NewsletterSignup() {
    const [loading, setLoading] = useState(false)

    const [formResponse, setFormResponse] = useState({
        type: '',
        message: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: ''
    })

    function handleFormSubmit(e) {
        setLoading(true)
        e.preventDefault()
        const formData = new FormData(e.target)

        axios({
            url: apiUrl + '/newsletter',
            method: 'post',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(response => response.data)
        .then(data => {
            if(data.status === 'validation') {
                setErrors((prev) => ({
                    ...prev,
                    name: data.message.name,
                    email: data.message.email
                }))
            }
            
            if(data.status === 'success') {
                setFormResponse((prev) => ({
                    ...prev,
                    type: data.status,
                    message: data.message
                }))
            }

            setLoading(false)
        })
        .catch(error => {
            setFormResponse((prev) => ({
                ...prev,
                type: 'error',
                message: error.message
            }))

            setLoading(false)
        })
    }

    return (
        <form
            onSubmit={ (e) => handleFormSubmit(e) }
            method='post'
            className='newsletter-signup-form'>

            {
                formResponse.type
                && <div className={ `form-response ${ formResponse.type }` }>{ formResponse.message }</div> 
            }

            <div className='input-group'>
                <input
                    type='text'
                    name='name'
                    placeholder='Name and surname' />
                { errors.name && <div className='message error'>{ errors.name }</div> }
            </div>

            <div className='input-group'>
                <input
                    type='text'
                    name='email'
                    placeholder='Email address' />
                { errors.email && <div className='message error'>{ errors.email }</div> }
            </div>

            <button className='red'>
                { loading ? 'Loading...' : 'Subscribe' }
            </button>
        </form>
    )
}
import axios from 'axios'
import { useState } from 'react'

const {
    VITE_REACT_API: apiUrl,
} = import.meta.env

export default function ListingApplyForm() {
    const [loading, setLoading] = useState(false)

    const [formResponse, setFormResponse] = useState({
        type: '',
        message: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        files: ''
    })

    function handleFormSubmit(e) {
        e.preventDefault()
        const formData  = new FormData(e.target)

        console.log(formData.get('files'))

        axios({
            url: apiUrl + '/apply',
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
                    email: data.message.email,
                    subject: data.message.subject,
                    message: data.message.message
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
        <form onSubmit={ (e) => handleFormSubmit(e) }>
            <div className='input-group'>
                <label>Your name and surname *:</label>
                <input
                    name='name'
                    type='text'
                    placeholder='Name and surname' />
                { errors.name && <div className='message error'>{ errors.name }</div> }
            </div>

            <div className='input-group'>
                <label>Your email address *:</label>
                <input
                    name='email'
                    type='text'
                    placeholder='Email address' />
                { errors.email && <div className='message error'>{ errors.email }</div> }
            </div>

            <div className='input-group'>
                <label>Subject *:</label>
                <input
                    name='subject'
                    type='text'
                    placeholder='Subject' />
                { errors.subject && <div className='message error'>{ errors.subject }</div> }
            </div>

            <div className='input-group'>
                <label>Message *:</label>
                <textarea
                    name='message'
                    rows='5'></textarea>
                { errors.message && <div className='message error'>{ errors.message }</div> }
            </div>

            <div className='input-group'>
                <label>Files:</label>
                <input
                    type='file'
                    name='files'
                    multiple='multiple' />
            </div>

            <button className='black'>Apply</button>
        </form>
    )
}
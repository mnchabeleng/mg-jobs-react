import { useState } from 'react'
import { validName, validEmail } from '../helpers/validate'
import Input from './html/form/Input'
import Button from './html/form/Button'
import Label from './html/form/Label'

const messages = {
    formResponse: {
        success: 'Thank you for subscribing to our newsletter. You\'ll get notified as soon as new jobs and tenders are posted.'
    },
    name: {
        error: 'Provide a name, minimum 3 characters'
    },
    email: {
        error: 'Provide a valid email address'
    }
}

export default function NewsLetterForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [nameResponse, setNameResponse] = useState({
        type: '',
        message: ''
    })
    const [emailResponse, setEmailResponse] = useState({
        type: '',
        message: ''
    })

    const [formResponse, setFormResponse] = useState({
        type: '',
        message: ''
    })

    const [formLoading, setFormLoading] = useState(false)

    function handleFormSubmitSubmit(e) {
        e.preventDefault()

        setFormResponse({
            type: '',
            message: ''
        })
        
        if(!validName(name)) {
            setNameResponse({
                type: 'error',
                message: messages.name.error
            })
        } else {
            setNameResponse({
                type: '',
                message: ''
            })
        }

        if(!validEmail(email)) {
            setEmailResponse({
                type: 'error',
                message: messages.email.error
            })
        } else {
            setEmailResponse({
                type: '',
                message: ''
            })
        }

        if(validName(name) && validEmail(email)) {
            setFormLoading(true)
            setTimeout(() => {
                setFormLoading(false)
                setName('')
                setEmail('')
                setFormResponse({
                    type: 'success',
                    message: messages.formResponse.success
                })
            }, 1000)
        }
    }

    function nameInputChange(e) {
        setName(e.target.value)

        if(!validName(name)) {
            setNameResponse({
                type: 'error',
                message: messages.name.error
            })
        } else {
            setNameResponse({
                type: '',
                message: ''
            })
        }
    }

    function emailInputChange(e) {
        setEmail(e.target.value)

        if(!validEmail(email)) {
            setEmailResponse({
                type: 'error',
                message: messages.email.error
            })
        } else {
            setEmailResponse({
                type: '',
                message: ''
            })
        }
    }

    return (
        <form
            className="flex flex-col text-left gap-3 max-w-xs mx-auto"
            onSubmit={ (e) => handleFormSubmitSubmit(e) }>
            {
                (formResponse.type === 'success')
                && <div className="p-4 rounded-md bg-green-600 border-2 border-green-400">
                    { formResponse.message }
                </div>          
            }
            <div>
                <Label>Name and Surname</Label>
                <Input
                    className="text-gray-900"
                    placeholder="Name and Surname"
                    value={ name }
                    onChange={ (e) => nameInputChange(e) } />
                { (nameResponse.type && nameResponse.message) && <div className="text-sm">{ nameResponse.message }</div> }
            </div>
            <div>
                <Label>Email Address</Label>
                <Input
                    className="text-gray-900"
                    placeholder="Email Address"
                    value={ email }
                    onChange={ (e) => emailInputChange(e) } />
                { (emailResponse.type && emailResponse.message) && <div className="text-sm">{ emailResponse.message }</div> }
            </div>
            <Button
                className=" bg-gray-900 hover:bg-[#000] active:bg-[#000">
                { formLoading ? 'Loading...' : 'Subscribe' }</Button>
        </form>
    )
}

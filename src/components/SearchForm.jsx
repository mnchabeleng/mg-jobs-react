import { RiSearchLine } from 'react-icons/ri'

import Input from './html/form/Input'
import Button from './html/form/Button'

export default function SearchForm() {
    function handleFormSubmit(e) {
        e.preventDefault()
        console.log('form submit')
    }

    return (
        <form
            className="flex flex-col gap-2"
            onSubmit={ (e) => handleFormSubmit(e) }>
            <div className="flex flex-col gap-2 md:flex-row">
                <div className="flex-grow">
                    <Input />
                </div>
                <div className="flex-grow">
                    <Input />
                </div>
                <div className="flex-grow">
                    <Input />
                </div>
            </div>
            <div></div>
            <div>
                <Button className="flex items-center gap-2">
                    <RiSearchLine />
                    Search
                </Button>
            </div>
        </form>
    )
}

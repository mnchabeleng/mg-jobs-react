import { RiSearchLine } from 'react-icons/ri'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import Input from './html/form/Input'
import Button from './html/form/Button'
import CheckBox from './html/form/CheckBox'

export default function SearchForm() {
    function handleFormSubmit(e) {
        e.preventDefault()
        console.log('form submit')
    }

    return (
        <form
            className="flex flex-col gap-2 rounded-md"
            onSubmit={ (e) => handleFormSubmit(e) }>
            <div className="flex flex-col gap-2 md:flex-row">
                <div className="flex-grow">
                    <Input
                        placeholder="Keyword..." />
                </div>
                <div className="flex-grow">
                    <Input
                        placeholder="Sector..." />
                </div>
                <div className="flex-grow">
                    <Input
                        placeholder="Location..." />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <CheckBox>
                    Full Time
                </CheckBox>
                <CheckBox>
                    Part Time
                </CheckBox>
                <CheckBox>
                    Tender
                </CheckBox>
            </div>
            <div>
                <Button
                    className="flex items-center gap-2 text-gray-100 bg-red-600 hover:bg-red-700 active:bg-red-700">
                    <RiSearchLine />
                    Search
                </Button>
            </div>
        </form>
    )
}

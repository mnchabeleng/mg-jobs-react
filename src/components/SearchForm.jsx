import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { RiSearchLine } from 'react-icons/ri'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import Input from './html/form/Input'
import Select from './html/form/Select'
import Button from './html/form/Button'
import CheckBox from './html/form/CheckBox'

export default function SearchForm() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const [keyword, setKeyword] = useState(() => setInitialKeyword())

    const [fullTime, setFullTime] = useState()
    const [partTime, setPartTime] = useState()
    const [Tender, setTender] = useState()

    function setInitialKeyword() {
        return searchParams.get('keyword') ?? ''
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        navigate(`/listings?keyword=${ keyword }`)
    }

    return (
        <form
            className="flex flex-col gap-2 rounded-md"
            onSubmit={ (e) => handleFormSubmit(e) }>
            <div className="flex flex-col gap-2 md:flex-row">
                <div className="flex-grow">
                    <Input
                        onChange={ (e) => setKeyword(e.target.value) }
                        value={ keyword }
                        placeholder="Keyword..." />
                </div>
                <div className="flex-grow">
                    <Select>
                        <option value="">~ Select a category ~</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </Select>
                </div>
                <div className="flex-grow">
                    <Select>
                        <option value="">~ Select a location ~</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </Select>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <CheckBox>
                    Full Time Job
                </CheckBox>
                <CheckBox>
                    Part Time Job
                </CheckBox>
                <CheckBox>
                    Contract Job
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

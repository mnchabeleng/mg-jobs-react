export default function LocationSelect({ data, isFetching, location, setLocation }) {
    return (
        <select
            onChange={ (e) => setLocation(e.target.value) }
            value={ location }
            name='location'>
        {
            isFetching
            ? <option value=''>Loading...</option>
            : <>
                <option value=''>~ Select Location ~</option>
                {
                    data.map((item, index) => <option key={ index } value={ item.id }>{ item.name }</option>)
                }
            </>
        }
        </select>
    )
}
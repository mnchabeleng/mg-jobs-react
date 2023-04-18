export default function CheckBox(props) {
    const {
        children,
        className,
        value,
        ...restOfProps
    } = props

    const classes = className ?? ''

    return (
        <label htmlFor="vue-checkbox-list" className="flex items-center ml-2 cursor-pointer text-sm font-medium text-gray-50 dark:text-gray-300">
            <input
                value={ value ?? '' }
                type="checkbox"
                className={ classes.concat(" ", "w-5 h-5 mr-2 text-blue-600 bg-gray-100 cursor-pointer border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500") }
                { ...restOfProps } />
            { children }
        </label>
    )
}

export default function CheckBox(props) {
    const {
        children,
        className,
        ...restOfProps
    } = props

    const classes = className ?? ''

    return (
        <label for="vue-checkbox-list" class="flex items-center ml-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300">
            <input
                type="checkbox"
                className={ classes.concat(" ", "w-5 h-5 mr-2 text-blue-600 bg-gray-100 cursor-pointer border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500") }
                { ...restOfProps } />
            { children }
        </label>
    )
}

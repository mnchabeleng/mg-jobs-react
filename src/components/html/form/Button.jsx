export default function Button(props) {
    const {
        children,
        className,
        ...restOfProps
    } = props

    const classes = className ?? ''

    return (
        <button
            className={ classes.concat(" ", "px-6 py-2 font-medium tracking-wide capitalize transition-colors duration-300 transform focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80") }
            { ...restOfProps }>
            { children }
        </button>
    )
}

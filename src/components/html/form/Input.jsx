export default function Input(props) {
    const {
        className,
        ...restOfProps
    } = props

    const classes = className ?? ''

    return (
        <input
            className={ classes.concat(" ", "w-full rounded-sm border-gray-200 p-3 text-sm") }
            { ...restOfProps } />
    )
}

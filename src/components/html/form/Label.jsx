export default function Label(props) {
    const {
       children,
       className,
       ...restOfProps 
    } = props

    const classes = className ?? ''

    return (
        <label
            className={ classes.concat(" ", "font-semibold") }
            { ...restOfProps }>
            { children }
        </label>
    )
}

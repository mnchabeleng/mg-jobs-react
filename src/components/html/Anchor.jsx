export default function Anchor(props) {
    const {
        children,
        className,
        ...restOfProps
    } = props

    const classes = className ?? ''

    return (
        <a
            className={ classes.concat(" ", "") }
            { ...restOfProps }>
            { children }
        </a>
    )
}

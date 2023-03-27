export default function Container(props) {
    const {
        children,
        className,
        ...restOfProps
    } = props

    const classes = className ?? ''
    
    return (
        <div
            className={ classes.concat(" ", "max-w-6xl mx-auto") }
            { ...restOfProps }>
            { children }
        </div>
    )
}

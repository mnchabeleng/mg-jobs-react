export default function Section(props) {
    const {
        children,
        className,
        ...restOfProps
    } = props

    const classes = className ?? ''

    return (
        <section
            className={ classes.concat(" ", "py-10 px-3") }
            { ...restOfProps }>
            { children }
        </section>
    )
}

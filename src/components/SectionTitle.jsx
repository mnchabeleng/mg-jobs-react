export default function SectionTitle(props) {
    const {
        children,
        className,
        ...restOfProps
    } = props

    const classes = className ?? ''

    return (
        <h2
            className={ classes.concat(" ", "text-xl mb-6 font-bold md:text-2xl") }
            { ...restOfProps }>
            { children }
        </h2>
    )
}

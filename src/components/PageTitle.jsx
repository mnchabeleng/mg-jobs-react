export default function PageTitle(props) {
    const {
        children,
        className,
        ...restofProps
    } = props

    const classes = className ?? ''

    return (
        <h1
            className={ classes.concat(" ", "text-3xl mb-6 font-bold sm:text-4xl") }
            { ...restofProps }>
            { children }
        </h1>
    )
}

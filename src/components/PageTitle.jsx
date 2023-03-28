export default function PageTitle(props) {
    const {
        children,
        className,
        ...restofProps
    } = props

    const classes = "mb-6 font-bold text-3xl sm:text-4xl"

    return (
        <h1
            className={ classes.concat(" ", className ?? "") }
            { ...restofProps }>
            { children }
        </h1>
    )
}

export default function Select(props) {
  const {
      className,
      children,
      ...restOfProps
  } = props

  const classes = className ?? ''

  return (
    <select
      className={ classes.concat(" ", "w-full rounded-sm border-gray-200 p-3 text-sm") }
      { ...restOfProps }>
      { children }
    </select>
  )
}

import {
  RiFacebookFill,
  RiLinkedinFill,
  RiWhatsappLine,
  RiTwitterFill
} from 'react-icons/ri'

export function ShareLink(props) {
  const {
    data,
    children,
    className,
    ...restOfProps
  } = props

  const classes = "block p-2 rounded-md text-gray-50"

  return (
    <a
      className={ classes.concat(" ", className ?? "") }
      target='_blank'
      rel="noopener noreferrer"
      { ...restOfProps }>{ children }</a>
  )
}

export default function ShareListing() {
  return (
    <div className="mb-4 flex items-center gap-8">
        <div>
          <b>Share Listing</b>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <ShareLink
              className="bg-[#3b5998]"
              href="#!">
              <RiFacebookFill />
            </ShareLink>
          </li>
          <li>
            <ShareLink
              className="bg-[#26a7de]"
              href="#!">
              <RiTwitterFill />
            </ShareLink>
          </li>
          <li>
            <ShareLink
              className="bg-[#25D366]"
              href="#!">
              <RiWhatsappLine />
            </ShareLink>
          </li>
          <li>
            <ShareLink
              className="bg-[#0e76a8]"
              href="#!">
              <RiLinkedinFill />
            </ShareLink>
          </li>
        </ul>
    </div>
  )
}

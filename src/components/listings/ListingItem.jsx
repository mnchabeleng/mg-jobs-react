import { Link } from 'react-router-dom'
import { RiMapPin2Fill, RiTimer2Line } from 'react-icons/ri'
import { momentsAgo } from '../../helpers/time'

export default function ListingItem({ data }) {
  const slug = data?.slug
  let title = data?.title.rendered
  const date = data?.modified

  const companyName = data?._embedded['wp:term'][0][0]?.name
  const region = data?._embedded['wp:term'][1][0]?.name
  const sectors = data?._embedded['wp:term'][2]
  const type = data?._embedded['wp:term'][3][0]?.name
  
  title = (title.length > 55) ? title.substring(0, 55) + '...' : title

  return (
    <Link
      to={ `/listings/${ slug }` }
      className="flex flex-col justify-between gap-4 p-4 min-h-[200px] shadow-lg border border-gray-100 rounded-sm transition-all duration-300">
      <div>
        <div className="font-semibold">{ companyName && <>{ companyName }</> }</div>
        { region && <div className="flex items-center text-sm"><RiMapPin2Fill />{ region }</div> }
      </div>

      <div>
        <h3
          className="font-bold text-lg"
          dangerouslySetInnerHTML={{ __html: title }} />

        <div className="text-sm">
          { 
            (sectors.length > 0)
            && sectors.map((item, index) => (
            <div
              key={ index }
              className="inline-block">
              { (index > 0) && ', ' }{ item.name }
            </div> ))
          }
        </div>
      </div>

      <div className="flex justify-between items-center text-sm">
        <div>{ type && type }</div>
        <div className="flex items-center"><RiTimer2Line/>{ date && momentsAgo(date) }</div>
      </div>
    </Link>
  )
}

import { RiStickyNoteLine } from 'react-icons/ri'

export default function NoListings({ title }) {
  return (
    <div className="flex items-center p-4 min-h-[200px] shadow-lg border border-gray-100 rounded-sm transition-all duration-300">
        <div className="text-center mx-auto basis-80 text-gray-500">
            <RiStickyNoteLine className="text-4xl mx-auto mb-6" />
            <p>
                There are currently no listings. Signup to our newsletter to get notified as soon as new jobs/tenders are posted.
            </p>
        </div>
    </div>
  )
}

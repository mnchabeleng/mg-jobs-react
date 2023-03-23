export default function ListingItem() {
  return (
        <div className="group bg-gray-900 p-4 rounded-sm transition-all duration-300">
          <div className="flex items-center gap-x-2">
            <img className="aspect-[2/2] w-16" src="https://img.icons8.com/fluency/48/null/mac-os.png" />
            <div>
              <h3 className="text-xl font-bold text-gray-50">Apple</h3>
              <span className="text-xs text-gray-300">New location, USA</span>
            </div>
          </div>
          <div className="my-4">
            <h3 className="text-2xl font-medium text-gray-200">UI/UX Designer</h3>
            <div className="text-sm font-medium">
              <span className="m-1 ml-0 inline-block text-blue-500">HTML</span>
              <span className="m-1 ml-0 inline-block text-yellow-500">CSS</span>
              <span className="m-1 ml-0 inline-block text-pink-500">FIGMA</span>
              <span className="m-1 ml-0 inline-block text-lime-500">Ad. XD</span>
              <span className="m-1 ml-0 inline-block text-blue-500">Illustrator</span>
            </div>
            <div className="mt-2 text-sm text-gray-400">$60K - $100K per year</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-50">Full Time</span>
          </div>
        </div>
  )
}

export default function ListingsLoader({ count }) {
    const listings = []

    for (let i = 0; i < count; i++) {
        listings.push(i)
    }

    return (
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
        {
            listings.map((item, index) => (
                <div
                    key={ index }
                    className="flex items-center justify-center min-h-[200px] bg-gray-300 rounded-sm animate-pulse dark:bg-gray-700">
                    <span className="sr-only">Loading...</span>
                </div>
            )) 
        }
        </div>
    )
}
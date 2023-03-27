export default function PostsLoader({ count }) {
    const posts = []

    for (let i = 0; i < count; i++) {
        posts.push(i)
    }

    return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {
            listings.map((item, index) => (
                <div
                    key={ index }
                    className="flex items-center justify-center min-h-[200px] max-w-sm bg-gray-300 rounded-sm animate-pulse dark:bg-gray-700">
                    <span className="sr-only">Loading...</span>
                </div>
            )) 
        }
        </div>
    )
}
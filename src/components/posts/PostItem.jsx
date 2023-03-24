export default function PostItem({ data }) {
    const mediumImage = data?._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.medium?.source_url
    const thumbnailImage = data?._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.thumbnail?.source_url

    let title = data?.title.rendered ?? ''
    title = title.length > 40 ? title.substring(0, 40) + '...' : title

    console.log(mediumImage)

    return (
        <div className="flex gap-3 md:flex-col">
            <div>
                <div className="h-20 w-20 sm:w-auto sm:h-60 xl:h-44 bg-slate-600 rounded-sm"></div>
            </div>
            <div>
                <h3 className="sm:font-bold sm:text-lg mb-2">{ title }</h3>
            </div>
        </div>
    )
}

import { momentsAgo } from '../../helpers/time'

export default function PostItem({ data }) {
    const largeImage = data?._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.large?.source_url
    const mediumImage = data?._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.medium?.source_url
    const thumbnailImage = data?._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.thumbnail?.source_url

    let title = data?.title.rendered ?? ''
    title = title.length > 55 ? title.substring(0, 55) + '...' : title

    const postLink = data.link

    const postsDate = data?.date

    const postCategory = data?._embedded['wp:term'][0][0]?.name

    const paragraphs = data.excerpt.rendered.split('</p>')
    const firstParagraph = paragraphs[0].length > 80 ? paragraphs[0].substring(0, 80) + '... </p>' : paragraphs[0] + '</p>'

    return (
        <div className="flex gap-3 md:flex-col">
            <div>
                <div className="h-32 w-32 md:w-auto md:h-72 xl:h-44 bg-slate-600 rounded-sm">
                    <a
                        href={ postLink }
                        target='_blank'
                        rel='noopener noreferrer'>
                        <picture>
                            <source media="(min-width: 1280px)" srcSet={ mediumImage } />
                            <source media="(min-width: 768px)" srcSet={ largeImage } />
                            <img
                                className="w-full h-full object-cover rounded-sm object-top transition duration-500"
                                src={ thumbnailImage }
                                alt={ title }
                                loading="lazy" />
                        </picture>
                    </a>
                </div>
            </div>
            <div>
                <h3 className="font-bold text-lg mb-2 hover:underline">
                    <a
                        href={ postLink }
                        target='_blank'
                        rel='noopener noreferrer'
                        dangerouslySetInnerHTML={{ __html: title }} />
                </h3>

                <ul className="flex gap-2 mb-4">
                    <li>{ momentsAgo(postsDate) }</li>
                    &bull;
                    <li>{ postCategory }</li>
                </ul>

                <div dangerouslySetInnerHTML={{ __html: firstParagraph }} />
            </div>
        </div>
    )
}

import styles from '../../../../assets/css/main/components/Posts.module.css'

export default function PostItemExcerpt({ data }) {
    const paragraphs = data.content.rendered.split('</p>')
    const firstParagraph = paragraphs[0].length > 80 ? paragraphs[0].substring(0, 80) + '... </p>' : paragraphs[0] + '</p>'

    return (
        <div dangerouslySetInnerHTML={{ __html: firstParagraph }} />
    )
}
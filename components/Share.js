import { FacebookShareButton, FacebookIcon } from 'next-share';
import { TwitterShareButton, TwitterIcon } from 'next-share'
import { WhatsappShareButton, WhatsappIcon } from 'next-share'
import { PinterestShareButton, PinterestIcon } from 'next-share'

const Share = ({ article }) => {
    const share_url = `https://www.moopio.com/${article.slug}.html`
    return (
        <>
            <FacebookShareButton
                url={share_url}
                quote={article.title}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton
                url={share_url}
                title={article.title}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>

            <WhatsappShareButton
                url={share_url}
                title={article.title}
                separator=":: "
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <PinterestShareButton
                url={share_url}
                description={article.description}
                media={article.image}
            >
                <PinterestIcon size={32} round />
            </PinterestShareButton>
        </>
    )
}

export default Share;
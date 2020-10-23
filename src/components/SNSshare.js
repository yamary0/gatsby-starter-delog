import React from 'react'
import {
    TwitterShareButton,
    TwitterIcon,
    FacebookShareButton,
    FacebookIcon,
    LineShareButton,
    LineIcon
} from 'react-share'

const SNSshare = ({articleUrl, articleTitle}) => {
    const buttonSize = 32
    return (
        <div className="SNSshare">
            <FacebookShareButton url={articleUrl}>
                <FacebookIcon size={buttonSize} round />
            </FacebookShareButton>

            <LineShareButton url={articleUrl}>
                <LineIcon size={buttonSize} round />
            </LineShareButton>

            <TwitterShareButton title={articleTitle} via="yuzu" url={articleUrl}>
                <TwitterIcon size={buttonSize} round />
            </TwitterShareButton>
        </div>
    )
}

export default SNSshare

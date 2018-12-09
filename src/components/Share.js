import React from 'react'

import { rhythm } from '../utils/typography'

import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon
} from 'react-share'

class Share extends React.Component {
  render() {
    let buttonProps = {
      style: {
        display: 'inline-block',
        margin: rhythm(0.25),
        cursor: 'pointer',
      },
      url: this.props.url,
      title: `An interview with ${this.props.title} - The Py Files`,
    }
    let iconProps = {
      size: rhythm(1.5),
      round: true,
    }
    return (
      <div>
        <FacebookShareButton {...buttonProps} >
          <FacebookIcon {...iconProps} />
        </FacebookShareButton>

        <TwitterShareButton {...buttonProps} >
          <TwitterIcon {...iconProps} />
        </TwitterShareButton>

        <GooglePlusShareButton {...buttonProps} >
          <GooglePlusIcon {...iconProps} />
        </GooglePlusShareButton>

        <LinkedinShareButton {...buttonProps} >
          <LinkedinIcon {...iconProps} />
        </LinkedinShareButton>

        <RedditShareButton {...buttonProps} >
          <RedditIcon {...iconProps} />
        </RedditShareButton>
      </div>
    )
  }
}

export default Share
import React from 'react'

import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <a
          href="https://twitter.com/rick_west8"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a> &bull;{' '}
        <a
          href="https://medium.com/thepyfiles"
          target="_blank"
          rel="noopener noreferrer"
        >
          medium
        </a> &bull;{' '}
        <a
          href="mailto:thepyfiles@gmail.com"
        > contact
        </a> &bull;{' '}
        <a href="https://thepyfiles.com/rss.xml"
        > rss
        </a>
      </footer>
    )
  }
}

export default Footer
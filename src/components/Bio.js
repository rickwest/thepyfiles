import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    let { pic, name, bio, twitter } = this.props
    if (pic && name && bio) {
      return (
        <div
          style={{
            display: 'flex',
            marginBottom: rhythm(2.5),
          }}
        >
          <img
            src={pic}
            alt={name}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
              borderRadius: '50%',
            }}
          />
          <p>{bio} {twitter ? <a href={`https://twitter.com/${twitter}`}>@{twitter}</a> : null }</p>
        </div>
      )
    } else {
      return (
        <div
          style={{
            display: 'flex',
            marginBottom: rhythm(2.5),
          }}
        >
          <img
            src={profilePic}
            alt={`Rick West`}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
              borderRadius: '50%',
            }}
          />
          <p>
            Interview by <strong>Rick West</strong>, a web developer and software engineering student from Sheffield, UK.{' '}
            <a href="https://twitter.com/rick_west8">
              You should follow me on Twitter
            </a> 🙂
          </p>
        </div>
      )
    }
  }
}

export default Bio

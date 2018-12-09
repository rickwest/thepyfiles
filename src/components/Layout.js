import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

import thePyFilesLogo from './the-py-files.png'
import Footer from './Footer'
import Newsletter from './Newsletter'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
          <img src={thePyFilesLogo} alt="The Py Files logo" />
          <div
            style={{
              display: 'flex',
              marginBottom: rhythm(2.5),
            }}
          >
            <p>
              <strong>
                A series of interviews with some of the awesome members of the Python community 🐍. Let's get to know the people behind the packages! 🙂
              </strong>
            </p>
          </div>
        </div>
      )

    } else {
      header = (
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          <img src={thePyFilesLogo} alt="The Py Files logo" style={{ height: '75px', marginBottom: 0 }} />
        </Link>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <Newsletter />
        <Footer />
      </div>
    )
  }
}

export default Layout

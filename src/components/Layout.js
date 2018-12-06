import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

import thePyFilesLogo from './the-py-files.png'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = <img src={thePyFilesLogo} alt="The Py Files logo" />
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
          <img src={thePyFilesLogo} alt="The Py Files logo" style={{ height: '75px' }} />
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
      </div>
    )
  }
}

export default Layout

import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import logo from '../assets/the-py-files.png'

const Seo = ({ frontmatter, url }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
      }
    `}
    render={({ site: { siteMetadata } }) => {
      const siteTitle = siteMetadata.title
      const logoUrl = `${siteMetadata.siteUrl}${logo}`

      return (
        <Helmet>
          {/* Common Tags */}
          <title>{`${frontmatter.title} | ${siteTitle}`}</title>
          {/* Search Engine */}
          <meta
            name="description"
            content={`An interview with ${frontmatter.title}. ${
              frontmatter.bio
            }`}
          />
          <meta name="image" content={logoUrl} />
          {/* Schema.org for Google */}
          <meta
            itemProp="name"
            content={`${frontmatter.title} | ${siteTitle}`}
          />
          <meta
            itemProp="description"
            content={`An interview with ${frontmatter.title}. ${
              frontmatter.bio
            }`}
          />
          <meta itemProp="image" content={logoUrl} />
          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content={`${frontmatter.title} | ${siteTitle}`}
          />
          <meta
            name="twitter:description"
            content={`An interview with ${frontmatter.title}. ${
              frontmatter.bio
            }`}
          />
          <meta name="twitter:site" content="@thepyfiles" />
          <meta name="twitter:creator" content="@rick_west8" />
          <meta name="twitter:image:src" content="preview.image" />
          {/* Open Graph general (Facebook, Pinterest & Google+) */}
          <meta
            name="og:description"
            content={`An interview with ${frontmatter.title}. ${
              frontmatter.bio
            }`}
          />
          <meta name="og:image" content={logoUrl} />
          <meta name="og:url" content={url} />
          <meta name="og:site_name" content="The Py Files" />
          <meta name="og:locale" content="en_GB" />
          <meta name="og:type" content="article" />
          {/* Open Graph - Article */}
          <meta name="article:section" content="Software Development" />
          <meta name="article:published_time" content={`${frontmatter.date}`} />
          <meta name="article:author" content="https://rickwest.co.uk" />
          <meta
            name="article:tag"
            content={`${
              frontmatter.title
            }, Python, Programming, Software Development, Web Developer`}
          />
        </Helmet>
      )
    }}
  />
)

export default Seo

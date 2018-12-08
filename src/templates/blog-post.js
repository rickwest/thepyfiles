import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import readingTime from 'reading-time'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import { ShareButtonCircle, ShareBlockStandard } from 'react-custom-share'
import { FaEnvelope, FaFacebook, FaGooglePlus, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { formatReadingTime } from '../utils/helpers'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const timeToRead = readingTime(post.html)

    const shareBlockProps = {
      url: this.props.location,
      button: ShareButtonCircle,
      buttons: [
        { network: "Twitter", icon: FaTwitter },
        { network: "Facebook", icon: FaFacebook },
        { network: "GooglePlus", icon: FaGooglePlus },
        { network: "Email", icon: FaEnvelope },
        { network: "Linkedin", icon: FaLinkedin }
      ],
      text: `Give it a try - mywebsite.com `,
      longtext: `Take a look at this super website I have just found.`
    };

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
          {` • ${formatReadingTime(post.timeToRead)}`}
        </p>
        <Bio
          pic={post.frontmatter.pic.childImageSharp.resize.src}
          name={post.frontmatter.title}
          bio={post.frontmatter.bio}
          twitter={post.frontmatter.twitter}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <div style={{
          marginBottom: rhythm(1),
          textAlign: 'center',
        }}>
          Enjoyed this interview? Spread the love...
          <ShareBlockStandard {...shareBlockProps} />
        </div>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {
              previous &&
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            }
          </li>
          <li>
            {
              next &&
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            }
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      timeToRead
      frontmatter {
        title
        bio
        pic {
          childImageSharp {
            resize(width: 100) {
              src
            }
          }
        }
        twitter
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

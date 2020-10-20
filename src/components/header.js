import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({data}) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <header
      style={{
        background: `#1a1a1a`,
        marginBottom: `1.45rem`,
      }}
    >
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
              <Img fixed={data.file.childImageSharp.fixed} alt={siteTitle} />
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

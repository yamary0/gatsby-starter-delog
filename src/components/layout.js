import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import SNSshare from "../components/SNSshare"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const windowUrl = (typeof window !== 'undefined' && window.location.href) ? window.location.href : '';
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <SNSshare articleUrl={windowUrl} articleTitle={data.site.siteMetadata.title} />
        <p>&copy; {new Date().getFullYear()} yuzu</p>
      </footer>
    </div>
  )
}

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Icon from '../../static/assets/profile.png'
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">
          <img className="profile-icon" src={Icon} alt="profile icon" />
          {data.site.siteMetadata.home.title}
        </div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
        <div className="since-date">since 2020.10.17.</div>
        {/* <Link to='/contact' className="button -primary">Get in touch &rarr;</Link> */}
      </div>
    )}
  />
)
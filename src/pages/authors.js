import { graphql } from "gatsby"
import React from "react"
import AuthorCard from "../components/author-card"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const AboutPage = ({data}) => {
  const authors = data.allMarkdownRemark.edges;

  return (
    <Layout location={"authors"} title={"Authors"}>
      <SEO title="Authors"/>
      <div style={{
        padding: `${rhythm(1.5)} ${rhythm(3/4)} `
      }}>
          <h1 className="author-header">Meet the Authors</h1>
        <hr className="title-divider"></hr>
        <div className="ui cards">
        {
          authors.map(({node}) => {
            return (
            <AuthorCard
              html={node.html}
              name={node.frontmatter.name}
              tag={node.frontmatter.tag}
              role={node.frontmatter.role}
              slug={node.fields.slug}
              key={node.id}
            >
            </AuthorCard>)
          })
        }
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___priority], order: DESC}, filter: {fileAbsolutePath: {regex: "/authors/"}}) {
    edges {
      node {
        html
        id
        fields{
          slug
        }
        frontmatter {
          name
          tag
          role
        }
      }
    }
    nodes {
      id
    }
  }
}
`
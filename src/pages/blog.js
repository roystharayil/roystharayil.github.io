import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Container, Button, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReadme } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              slug
            }
            fields {
              slug
              readingTime {
                text
              } 
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Container className="post-wrapper">
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <Row>
              <div className="post-card">
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h1>{edge.node.frontmatter.title}</h1>
                </Link>
                <span className="side">
                  <FontAwesomeIcon icon={faReadme} style={{ color: "red" }} /> 
                 <span> {edge.node.fields.readingTime.text}</span>
                </span>
                <p>
                  <time>{edge.node.frontmatter.date}</time> -{" "}
                  {edge.node.frontmatter.slug}
                </p>
                <Button variant="Primary">
                  <Link to={`/blog/${edge.node.fields.slug}`}>
                    Read More...
                  </Link>
                </Button>

                <div className="text-muted"></div>
              </div>
            </Row>
          )
        })}
      </Container>
    </Layout>
  )
}

export default BlogPage

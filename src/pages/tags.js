import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import slugify from "slugify"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import setupTags from "../utils/setupTags"

const Tags = () => {
  const data = useStaticQuery(query)
  const newTags = setupTags(data.allContentfulRecipe.nodes)

  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })

            return (
              <Link key={index} to={`/tags/${slug}`} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags

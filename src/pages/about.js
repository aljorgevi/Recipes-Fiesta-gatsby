import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"

const About = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Find and share everyday cooking inspiration</h2>
            <p>
              Recipes Fiesta is here to help you cook delicious meals with less
              stress and more joy. We offer recipes and cooking advice for home
              cooks, by home cooks.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about2.jpg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5 className="text-quote">
            When life gives you lemons, make lemonade!
          </h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About

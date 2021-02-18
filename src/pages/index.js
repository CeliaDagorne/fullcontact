import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'
import Hero from '../components/Hero'
import Header from '../components/layouts/Header'
import Intros from '../components/Intros'

// Query for the Blog Home content in Prismic
export const query = graphql`
  query MyQuery {
    prismicBloghome {
      data {
        description {
          text
        }
        headline {
          text
        }
        image {
          url
        }
      }
      id
      type
    }
    prismicHeader {
      data {
        anchor_1 {
          text
        }
        anchor_2 {
          text
        }
        anchor_3 {
          text
        }
        phone {
          text
        }
      }
    }
    prismicHero {
      data {
        description {
          text
        }
        first_anchor
        headline {
          text
        }
        headline_2 {
          text
        }
        second_anchor
      }
      id
      type
    }
    allPrismicIntro {
      edges {
        node {
          id
          data {
            description {
              text
            }
            image {
              url
            }
            title {
              text
            }
          }
        }
      }
    }
    allPrismicPost(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          url
          id
          uid
          type
          data {
            title {
              raw
            }
            date
            body {
              ... on PrismicPostBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

// Using the queried Blog Home document data, we render the top section
// const BlogHomeHead = ({ home }) => {
//   const avatar = { backgroundImage: `url(${home.image.url})` }
//   return (
//     <div className="home-header container" data-wio-id={home.id}>
//       <div className="blog-avatar" style={avatar} />
//       <h1>{RichText.asText(home.headline)}</h1>
//       <p className="blog-description">{RichText.asText(home.description)}</p>
//     </div>
//   )
// }

export const Homepage = ({ data }) => {
  if (!data) return null
  // Define the Blog Home & Blog Post content returned from Prismic
  const headerData = data.prismicHeader.data
  const heroData = data.prismicHero.data
  const introsData = data.allPrismicIntro.edges

  return (
    <>
      <Header data={headerData} />
      <Layout>
        <Hero data={heroData} />
        <Intros introsData={introsData} />
      </Layout>
    </>
  )
}

export default withPreview(Homepage)

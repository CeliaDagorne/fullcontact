import React from 'react'
import { RichText } from 'prismic-reactjs'
import styles from './style.module.scss'

const linkResolver = (doc) => {
  // Pretty URLs for known types
  if (doc.type === 'blog') return `/post/${doc.uid}`
  if (doc.type === 'page') return `/${doc.uid}`
  // Fallback for other types, in case new custom types get created
  return `/doc/${doc.id}`
}

const Intro = ({ data, id }) => {
  console.log(data.description)

  return (
    <div className={styles.intro} key={id}>
      <div className={styles.image}>
        <img src={data.image.url} alt="Introduction" />
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>
          {RichText.asText(data.title)}
        </h2>
        <p className={styles.description}>
          {data.description.map((line, key) => (
            <span className={styles.descriptionLine} key={key}>
              {line.text}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default ({ introsData }) => {
  if (!introsData) return null
  return (
    <div className="container">
      {introsData.map((introData) => (
        <Intro data={introData.node.data} id={introData.node.id} key={introData.node.id} />
      ))}
    </div>
  )
}

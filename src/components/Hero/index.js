import React, { useEffect } from 'react'
import { RichText } from 'prismic-reactjs'
import styles from './style.module.scss'

import Image from '../../images/hero-3.png'

const Hero = ({ data }) => {
  if (!data) return null

  useEffect(() => {
    document.querySelector(`.${styles.hero}`).style.height = `${window.innerHeight}px`
    console.log(document.querySelector(`.${styles.hero}`))
  })

  return (
    <div className={styles.hero}>
      <div className={styles.imageBackground} style={{ backgroundImage: `url(${Image})` }} />
      <div className="container">
        <p className={styles.title}>
          {RichText.asText(data.headline)}
          <br />
          {RichText.asText(data.headline_2)}
        </p>
        <div className={styles.anchorsContainer}>
          <div className={styles.anchor}>
            <a href={`${data.first_anchor}`}>{data.first_anchor}</a>
          </div>
          <div className={styles.anchor}>
            <a href={`${data.second_anchor}`}>{data.second_anchor}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

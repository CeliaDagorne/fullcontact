import React from 'react'
import { RichText } from 'prismic-reactjs'
import styles from './style.module.scss'

import Image from '../../images/hero-3.png'

const Hero = ({ data }) => {
  if (!data) return null

  return (
    <div className={styles.hero}>
      <div className={styles.imageBackground} style={{ backgroundImage: `url(${Image})` }}>
        {/* <img src={Image} alt="Kitchen clear" /> */}
      </div>
      <div className="container">
        <p className={styles.title}>
          {RichText.asText(data.headline)}
          <br />
          {RichText.asText(data.headline_2)}
        </p>
        <div className={styles.anchorsContainer}>
          <a className={styles.anchor} href={`${data.first_anchor}`}>{data.first_anchor}</a>
          <a className={styles.anchor} href={`${data.second_anchor}`}>{data.second_anchor}</a>
        </div>
      </div>
    </div>
  )
}

export default Hero

import React from 'react'
import { RichText } from 'prismic-reactjs'
import styles from './style.module.scss'
import Logo from '../../../images/logo-fullcontact.png'

const Header = ({ data }) => {
  if (!data) return null

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo} href="#home">
          <img src={Logo} alt="Logo full contact"/>
        </a>
        <div className={styles.linksContainer}>
          <a className={styles.link} href={`#${RichText.asText(data.anchor_1)}`}>
            {RichText.asText(data.anchor_1)}
          </a>
          <a className={styles.link} href={`#${RichText.asText(data.anchor_2)}`}>
            {RichText.asText(data.anchor_2)}
          </a>
          <a className={styles.link} href={`#${RichText.asText(data.anchor_3)}`}>
            {RichText.asText(data.anchor_3)}
          </a>
          <a className={styles.linkTel} href={`tel:${RichText.asText(data.phone)}`}>
            {RichText.asText(data.phone)}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header

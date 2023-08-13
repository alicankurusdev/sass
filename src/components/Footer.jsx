import React from 'react'
import FooterStyle from "../scss/footer.module.scss"
const Footer = () => {
  return (
    <div className={FooterStyle.footer} >
          <p className={FooterStyle.title}>Copyright by AlicanKURUS:DEV {new Date().getFullYear()}</p>
        </div>
  )
}

export default Footer
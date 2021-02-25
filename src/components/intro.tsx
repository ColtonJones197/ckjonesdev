import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import SEO from "./seo"

const Intro = () => {
  
  return (
    <div style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      fontSize: 18,
    }}>
      <SEO title="Intro"/>
      <div>But so am I. I'm CK Jones and I will be documenting my journey through the good smash games of the Super Smash Brothers IP and maybe some other stuff.</div>
    </div>
  )
}

export default Intro
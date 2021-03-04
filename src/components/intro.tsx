import React from "react"
import { rhythm } from "../utils/typography"
import SEO from "./seo"

const Intro = () => {
  
  return (
    <div style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(26),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      fontSize: 18,
    }}>
      <SEO title="Intro"/>
      <div>I'm CK Jones and I will be documenting my journey through the good smash games of the Super Smash Brothers IP and maybe some other stuff.</div>
    </div>
  )
}

export default Intro
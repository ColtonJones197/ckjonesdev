import React from "react"
import { rhythm } from "../utils/typography"
import Fade from "reactstrap/lib/Fade"
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
      <Fade in={true} tag="p" className="mt-0">I'm CK Jones and I will be documenting my journey through the good smash games of the Super Smash Brothers IP and maybe some other stuff.</Fade>
    </div>
  )
}

export default Intro
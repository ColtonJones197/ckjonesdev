import React, { useState } from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";
import {Menu, MenuItem, MenuHeader} from "semantic-ui-react";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <Menu size="large" fixed="top" className="ui four item menu">
        <MenuItem href="/" header={true} link={true} icon={true}>B</MenuItem>
        <MenuItem href="/" link={true}>Smash Is Hard</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Blog</MenuItem>
      </Menu>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        
      </footer>
    </div>
  )
}

export default Layout

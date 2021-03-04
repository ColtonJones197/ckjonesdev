import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";
import {Grid, GridColumn, GridRow, Icon, Menu, MenuItem} from "semantic-ui-react";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          textAlign: "center",
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
      <Menu fixed='top' stackable={true} size="huge" className="ui inverted borderless five item menu">
        <MenuItem position='left' href="/" link={true}><b>Smash Is Hard</b></MenuItem>
        <MenuItem href='/authors'>Authors</MenuItem>
        <MenuItem position='right'>Blog</MenuItem>
      </Menu>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <div className="ui inverted vertical footer segment sticky">
          <Grid stretched={true} centered={true}>
            <GridRow>
              <GridColumn>
                <Icon name="large discord" link={true}></Icon>
              </GridColumn>
              <GridColumn>
                <Icon name="large twitter" link={true}></Icon>
              </GridColumn>
              <GridColumn>
                <Icon name='large youtube' link={true}></Icon>
              </GridColumn>
            </GridRow>
            <GridRow>
                  <Icon name='large envelope'></Icon>
                  <span>Suggestions? Contact me <a href='mailto:colton.jones197@gmail.com'>via email</a> or any of the social media above.</span>
            </GridRow>
          </Grid>
        </div>
      </footer>
    </div>
  )
}

export default Layout

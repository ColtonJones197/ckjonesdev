import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";
import {Grid, GridColumn, GridRow, Icon} from "semantic-ui-react";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: "1em",
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
      <div className="site-menu">
        <div className="ui seven item big menu">
          <a className="header item" href="/">
            Smash Is Hard
          </a>
          <div className="item"></div>
          <a className="item" href="/authors">
            Contributors
          </a>
          <a className="item" href="/">
            Blog
          </a>
        </div>
      </div>
    )
  }
  return (
    <div>
      <header>{header}</header>
        <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(3 / 4)} ${rhythm(3 / 4)}`,
        }}>
          <main className="index-content">{children}</main>
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
                  <GridColumn>
                    <Icon name='large twitch' link={true}></Icon>
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
    </div>
  )
}

export default Layout

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import VideosGrid from "../components/videosGrid"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>The Smart Home Life</h1>
    <p>A news site all about building an affordable Apple Smart Home</p>
    <VideosGrid />
  </Layout>
)

export default IndexPage

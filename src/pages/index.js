import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import VideosGrid from "../components/videosGrid"

const Container = tw.div`
 flex flex-wrap justify-center
`

const Para = tw.h2`
  md:ml-4
  lg:ml-8
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Para>A news site all about building an affordable Apple Smart Home</Para>
    </Container>
    <VideosGrid />
  </Layout>
)

export default IndexPage

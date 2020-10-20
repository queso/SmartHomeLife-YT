import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import VideosGrid from "../components/videosGrid"

const Heading = tw.h1`
  text-xl
  lg:ml-8
  md:ml-4
`
const Para = tw.p`
  text-sm
  md:ml-4
  lg:ml-8
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>The Smart Home Life</Heading>
    <Para>A news site all about building an affordable Apple Smart Home</Para>
    <VideosGrid />
  </Layout>
)

export default IndexPage

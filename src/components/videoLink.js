import React from 'react';
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import ReactMarkdown from "react-markdown"

const Img = tw.img`
  w-64
  rounded-lg
  mr-8
`

const Container = tw.div`
  container
  flex
  flex-row
  mt-8
  mb-8
`

const linkColor = "color:cornflowerblue"

const VideoLink = ({ id, title, description, videoId, thumbnail, fields: { slug } }) => (
	<Container>
    <Img src={thumbnail.url} />
    <Link css={{linkColor}} to={`/video/${slug}`}>
      {title}
    </Link>
    <ReactMarkdown>{description}</ReactMarkdown>
  </Container>
)

export default VideoLink

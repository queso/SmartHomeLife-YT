import React from 'react';
import { Link } from "gatsby"
import tw, { styled, css } from "twin.macro"
import ReactMarkdown from "react-markdown"

const Img = tw.img`
  w-full
`

const Container = tw.div`
  max-w-sm rounded overflow-hidden shadow-lg my-8 mr-16
`

const TitleContainer = tw.div`
  font-bold text-xl mb-2 p-4
`

const InfoContainer = tw.div`
  text-gray-700 text-base p-4
`

const markdownStyle = css`
  & p {
    margin-bottom: 0.75rem;
  }
  & li {
    margin-top: 0.25rem;
    & a {
      text-decoration: underline;
    }
  }
`

const linkColor = "color:cornflowerblue"

const VideoLink = ({ id, title, description, videoId, thumbnail, fields: { slug } }) => (
	<Container>
    <Img src={thumbnail.url} />
    <TitleContainer>
      <Link css={[linkColor]} to={`/video/${slug}`}>
        {title}
      </Link>
    </TitleContainer>
    <InfoContainer>
      <ReactMarkdown css={[markdownStyle]}>{description}</ReactMarkdown>
    </InfoContainer>
  </Container>
)

export default VideoLink

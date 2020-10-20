import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import tw, { styled } from "twin.macro"
import VideoLink from './videoLink';

const Container = tw.div`
  flex flex-wrap justify-center
`

const VideosGrid = () => {
	const data = useStaticQuery(graphql`
		query {
			allYoutubeVideo (sort: {order: DESC, fields: publishedAt}){
				edges {
					node {
            id
						title
						videoId
						publishedAt
						description
						thumbnail {
							height
							url
							width
						}
            fields {
              slug
            }
					}
				}
			}
		}
	`);

	return (
    <Container>
    {data.allYoutubeVideo.edges.map(({ node: video }) => {
				return <VideoLink key={video.videoId} {...video} />;
			})}
    </Container>
	)
}

export default VideosGrid

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import VideoLink from './VideoLink';

const VideosGrid = () => {
	const data = useStaticQuery(graphql`
		query {
			allYoutubeVideo {
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
		<div>
    {data.allYoutubeVideo.edges.map(({ node: video }) => {
				return <VideoLink key={video.videoId} {...video} />;
			})}
		</div>
	)
}

export default VideosGrid

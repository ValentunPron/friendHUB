import React from 'react'
import { Box, Paper, Typography, IconButton, Avatar, Link as LinkMUI } from '@mui/material';
import styled from '@emotion/styled';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IosShareIcon from '@mui/icons-material/IosShare';
import { Link } from 'react-router-dom';

const ContentPost = styled(Paper)({
	maxWidth: 500,
	margin: '0 auto',
})

const PostHeader = styled(Box)({
	display: 'grid',
	paddingTop: '5px',
	gridTemplateColumns: '1fr auto',
	gap: 5,
	'.itemLeft': {
		display: "flex",
		gap: 7,
	},
});

const PostLeftInfo = styled("div")({
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
	'a, h4': {
		fontSize: '1rem',
	},
	'a': {
		fontWeight: 700,
	},
	'h4': {
		color: '#666',
		fontSize: '0.9rem',
	}
});

const PostContainer = styled('div')({
	padding: 10,
})

const PostText = styled(Typography)({
	marginTop: 15,
	fontSize: '1rem',
	lineHeight: 1.3,
	color: '#050505',
})

const PostAction = styled('div')({
	display: 'flex',
	alignItems: 'center',
	gap: 3,
	'span': {
		fontSize: '1.1rem',
		color: '#666',
	}
})

interface IPost {
	avatarImage: string,
	name: string,
	data: string,
	description?: string,
	image?: string,
	likes: number,
	comments: number,
	share: number,
	views: number
}

export const Post: React.FC<IPost> = ({ avatarImage, name, data, description, image, likes, comments, share, views }): React.ReactElement => {
	return (
		<ContentPost variant="outlined">
			<Box className='itemTop'>
				<PostContainer>
					<PostHeader>
						<div className='itemLeft'>
							<Link to="test">
								<Avatar
									sx={{ width: 40, height: 40 }}
									alt={name}
									src={avatarImage}
								/>
							</Link>
							<PostLeftInfo>
								<Link to="test"><LinkMUI variant='h4' color="#000" underline="hover">{name}</LinkMUI></Link>
								<Typography variant='h4'>{data}</Typography>
							</PostLeftInfo>
						</div>
						<Box>
							<IconButton>
								<MoreHorizIcon />
							</IconButton>
							<IconButton>
								<CloseIcon />
							</IconButton>
						</Box>
					</PostHeader>
					{
						description
							? <PostText>{description}</PostText>
							: ''
					}
				</PostContainer>
				{
					image
						? <img
							alt="content"
							src={image}
							width='100%' height='auto'
						/>
						: ''
				}
				<PostContainer>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
						<PostAction>
							<IconButton>
								<FavoriteBorderIcon />
							</IconButton>
							<span>{likes}</span>
						</PostAction>
						<PostAction>
							<IconButton>
								<ChatBubbleOutlineIcon />
							</IconButton>
							<span>{comments}</span>
						</PostAction>
						<PostAction>
							<IconButton>
								<ReplyIcon />
							</IconButton>
							<span>{share}</span>
						</PostAction>
						<PostAction>
							<IconButton>
								<VisibilityIcon />
							</IconButton>
							<span>{views}</span>
						</PostAction>
						<IconButton>
							<IosShareIcon />
						</IconButton>
					</Box>
				</PostContainer>
			</Box>
		</ContentPost>
	)
}
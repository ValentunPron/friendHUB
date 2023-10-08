import { List, ListItem, ListItemButton, Paper, Typography } from '@mui/material'
import React from 'react'

import styled from '@emotion/styled';

export const MenuTags: React.FC = (): React.ReactElement => {

	const TagsTitle = styled(Typography)({
		fontSize: '1.25rem',
		paddingLeft: 10,
		fontWeight: 700
	});

	const PaperBg = styled(Paper)({
		borderRadius: 10,
		padding: '10px 0',
		background: '#f8f9fc',
	})

	const ItemButton = styled(ListItemButton)({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'left',
	})

	const ItemTitle = styled(Typography)({
		width: '100%',
		fontSize: '1rem',
		fontWeight: 700,
		lineHeight: 1
	})

	const ItemPopular = styled(Typography)({
		width: '100%',
		fontSize: '0.8rem',
		color: '#666',
	})

	return (
		<PaperBg elevation={0} sx={{ mt: 6 }}>
			<TagsTitle variant='h5'>Trends for you</TagsTitle>
			<List style={{ marginTop: '15px' }}>
				<ListItem disablePadding>
					<ItemButton>
						<ItemTitle>Marvel</ItemTitle>
						<ItemPopular>1 posts</ItemPopular>
					</ItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ItemButton>
						<ItemTitle>DC</ItemTitle>
						<ItemPopular>2 posts</ItemPopular>
					</ItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ItemButton>
						<ItemTitle>FriendHUB</ItemTitle>
						<ItemPopular>12 posts</ItemPopular>
					</ItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ItemButton>
						<ItemTitle>Marvel</ItemTitle>
						<ItemPopular>1 posts</ItemPopular>
					</ItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ItemButton>
						<ItemTitle>Marvel</ItemTitle>
						<ItemPopular>1 posts</ItemPopular>
					</ItemButton>
				</ListItem>
			</List>
		</PaperBg >
	)
}
import React from 'react'
import { Box, Button, Grid, InputAdornment, OutlinedInput, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';

import { Post, Sidebar } from '../componets';

import SearchIcon from '@mui/icons-material/Search';

const SearchInput = styled(OutlinedInput)({
	borderRadius: 20,
	maxHeight: 40,
	paddingLeft: 10,
	background: '#f8f9fc',
	'svg': {
		marginRight: 5,
	},
})

const ContentBody = styled(Box)({
	display: "flex",
	flexDirection: 'column',
	gap: 15,
})

const ContentHeader = styled(Paper)({
	textAlign: 'center',
	padding: '5 0',
	marginTop: 2,
	'h6': {
		fontWeight: 700,
		color: '#333',
	},
	'div': {
		marginTop: 3,
		display: 'flex',
		justifyContent: 'space-between',
	},
	'button': {
		fontSize: 12,
		fontWeight: 600,
		color: '#000'
	},
	'button span.active': {
		borderBottom: '2px solid #1D9BF0',
	}
})

export const Home: React.FC = (): React.ReactElement => {

	return (
		<section style={{ margin: '10px 0' }}>
			<Grid container spacing={3}>
				<Grid item xs={2}>
					<Sidebar />
				</Grid>
				<Grid item xs={7}>
					<ContentBody>
						<ContentHeader variant="outlined" >
							<Typography variant='h6'>Головна</Typography>
							<div>
								<Button fullWidth><span className='active'>Рекомендіції</span></Button>
								<Button fullWidth>Підписки</Button>
							</div>
						</ContentHeader>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
							<Post
								avatarImage='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
								name="Remy Sharp"
								data="20 серпня 2023"
								description='Сделай сам удивительные шлемы для поклонников комиксов Marvel и DC Comics'
								image='https://images.thedirect.com/media/article_full/marvel-vs-dc-dcu-mcu.jpg'
								likes={21} comments={5} share={2} views={120}
							/>
						</Box>
					</ContentBody>
				</Grid>
				<Grid item xs={3}>
					<SearchInput
						startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
						placeholder="Пошук в friendHUB"
						fullWidth
					/>
				</Grid>
			</Grid>
		</section>
	)
}

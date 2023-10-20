import React from 'react'
import { Link as LinkMUI, Box, Button, Grid, InputAdornment, Paper, Hidden } from '@mui/material';
import styled from '@emotion/styled';

import { MenuTags, Post, Sidebar } from '../componets';

import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SearchInput } from '../styles';
import { Link } from 'react-router-dom';

const ContentBody = styled(Box)({
	display: "flex",
	flexDirection: 'column',
	gap: 15,
});

const SidebarTitleLink = styled(LinkMUI)({
	fontWeight: 800,
	fontSize: '1.2rem',
});

const ContentHeader = styled(Paper)({
	position: 'relative',
	textAlign: 'center',
	paddingTop: 6,
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
		fontSize: "0.8rem",
		fontWeight: 600,
		color: '#000'
	},
	'button span.active': {
		borderBottom: '2px solid #1D9BF0',
	},
});


export const Home: React.FC = (): React.ReactElement => {

	const [isTablet, setIsTablet] = React.useState<boolean>(false);
	const [isMobile, setIsMobile] = React.useState<boolean>(false);
	const [activeSidebar, setActiveSidebar] = React.useState<boolean>(false);

	const closeSidebarWindow = () => {
		setActiveSidebar(false)
	}

	React.useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 900px)');

		setIsTablet(mediaQuery.matches);

		const handleMediaQueryChange = (event: any) => {
			setIsTablet(event.matches);
		}

		mediaQuery.addEventListener('change', handleMediaQueryChange);

		return () => {
			mediaQuery.addEventListener('change', handleMediaQueryChange);
		}
	}, []);

	React.useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 767px)');

		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event: any) => {
			setIsMobile(event.matches);
			setActiveSidebar(false);
		}

		mediaQuery.addEventListener('change', handleMediaQueryChange);

		return () => {
			mediaQuery.addEventListener('change', handleMediaQueryChange);
		}
	}, []);



	return (
		<section style={{ margin: '10px 0' }}>
			<Grid container spacing={2}>
				{
					isMobile
						? <Sidebar status={activeSidebar} isMobile={isMobile} closeSidebarWindow={closeSidebarWindow} />
						: <Hidden only={['xs']}>
							<Grid item xs={isTablet ? 1 : 2}>
								<Sidebar status={true} closeSidebarWindow={closeSidebarWindow} />
							</Grid>
						</Hidden>
				}
				<Grid item xs>
					<ContentBody>
						<ContentHeader variant="outlined" >
							{isMobile
								?
								<button
									onClick={() => setActiveSidebar(!activeSidebar)}
									style={{ background: 'none', position: 'absolute', top: 5, left: 5 }}>
									<AccountCircleIcon fontSize='large' />
								</button>
								: ""
							}
							<Link to='/'>
								<SidebarTitleLink variant='h2' color="primary" underline="none">friendHUB</SidebarTitleLink>
							</Link>
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
							<Post
								avatarImage='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
								name="Remy Sharp"
								data="20 серпня 2023"
								description='Сделай сам удивительные шлемы для поклонников комиксов Marvel и DC Comics'
								image='https://images.thedirect.com/media/article_full/marvel-vs-dc-dcu-mcu.jpg'
								likes={21} comments={5} share={2} views={120}
							/>
							<Post
								avatarImage='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
								name="Remy Sharp"
								data="20 серпня 2023"
								description='Сделай сам удивительные шлемы для поклонников комиксов Marvel и DC Comics'
								image='https://images.thedirect.com/media/article_full/marvel-vs-dc-dcu-mcu.jpg'
								likes={21} comments={5} share={2} views={120}
							/>
							<Post
								avatarImage='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
								name="Remy Sharp"
								data="20 серпня 2023"
								description='Сделай сам удивительные шлемы для поклонников комиксов Marvel и DC Comics'
								image='https://images.thedirect.com/media/article_full/marvel-vs-dc-dcu-mcu.jpg'
								likes={21} comments={5} share={2} views={120}
							/>
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
				<Hidden only={['xs']}>
					<Grid item xs={3} style={{ marginRight: 10 }}>
						<SearchInput
							startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
							placeholder="Пошук в friendHUB"
							fullWidth
						/>
						<MenuTags />
					</Grid>
				</Hidden>
			</Grid>
		</section >
	)
}

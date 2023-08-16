import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link as LinkMUI, Button, Typography, styled } from '@mui/material';

const SidebarTitleLink = styled(LinkMUI)({
	fontWeight: 800,
	fontSize: '1.2rem',
});

const SidebardButton = styled(Button)({
	color: '#000',
	borderRadius: 20,
	justifyContent: 'flex-start',
	padding: '10px 6px',
	paddingLeft: 14,
	'h6': {
		fontWeight: 700,
		marginLeft: 10,
		fontSize: '0.9rem'
	},
	'svg': {
		fontSize: 20,
	}
})

const SidebarList = styled("ul")({
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
	marginLeft: -16,
	marginTop: 20,
})

export const Sidebar: React.FC = (): React.ReactElement => {
	return (
		<>
			<Link to='/'>
				<SidebarTitleLink variant='h2' color="primary" underline="none">friendHUB</SidebarTitleLink>
			</Link>
			<SidebarList>
				<li>
					<SidebardButton variant="text" fullWidth>
						<SearchIcon />
						<Typography variant='h6'>Пошук</Typography>
					</SidebardButton>
				</li>
				<li>
					<SidebardButton variant="text" fullWidth>
						<NotificationsNoneIcon />
						<Typography variant='h6'>Сповіщення</Typography>
					</SidebardButton>
				</li>
				<li>
					<SidebardButton variant="text" fullWidth>
						<MailIcon />
						<Typography variant='h6'>Повідомлення</Typography>
					</SidebardButton>
				</li>
				<li>
					<SidebardButton variant="text" fullWidth>
						<BookmarkBorderIcon />
						<Typography variant='h6'>Збережене</Typography>
					</SidebardButton>
				</li>
				<li>
					<SidebardButton variant="text" fullWidth>
						<ListAltIcon />
						<Typography variant='h6'>Списки</Typography>
					</SidebardButton>
				</li>
				<li>
					<SidebardButton variant="text" fullWidth>
						<PersonOutlineOutlinedIcon />
						<Typography variant='h6'>Профіль</Typography>
					</SidebardButton>
				</li>
			</SidebarList>
		</>
	)
}

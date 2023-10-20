import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Button, Typography, styled } from '@mui/material';

const SidebardButton = styled(Button)({
	color: '#000',
	borderRadius: 20,
	justifyContent: 'flex-start',
	padding: '10px 6px',
	'h6': {
		fontWeight: 700,
		marginLeft: 10,
		fontSize: '0.9rem'
	},
	'svg': {
		fontSize: '1.4rem',
	},
	"@media (max-width: 900px)": {
		minWidth: 'auto',
		padding: 6,
		justifyContent: 'center',
		'h6': {
			display: 'none',
			marginLeft: 0,
		},
		'svg': {
			fontSize: '2.3rem'
		}
	},
	"@media (max-width: 767px)": {
		padding: '4px 12px',
		justifyContent: 'flex-start',
		'svg': {
			fontSize: '1.8rem',
		},
		'h6': {
			fontSize: '0.8rem',
			display: 'block',
			marginLeft: 10,
		},
	}
})

const SidebarList = styled("ul")({
	paddingTop: 10,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	position: 'fixed',
	top: 0, left: 0,
	height: '100%',
	paddingRight: 8,
	background: '#fff',
	transition: 'all 0.4s',
	zIndex: 15,
	'ul': {
		display: 'flex',
		flexDirection: 'column',

		gap: 4,
		'@media (max-width: 767px)': {
			gap: 8,
			paddinhRight: 20,
		}
	}
})

const UserInfo = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	marginLeft: '5px',
	'span': {
		fontSize: '0.7rem',
		color: '#333',
		textTransform: 'none',
	},
	'@media (max-width: 900px)': {
		display: 'none',
	},
	'@media (max-width: 768px)': {
		display: 'flex',
	}
})


interface ISidebar {
	status: boolean,
	isMobile?: boolean,
	closeSidebarWindow: Function,
}

export const Sidebar: React.FC<ISidebar> = ({ status = false, isMobile = false, closeSidebarWindow }): React.ReactElement => {

	const windowRef = React.useRef(null);

	React.useEffect(() => {
		document.body.addEventListener('click', clickOutSearch);
	}, []);

	const clickOutSearch = (e: any) => {
		if (windowRef.current === e.target) {
			closeSidebarWindow();
		}
	}

	return (
		<div ref={windowRef}
			style={isMobile && status ? { position: 'fixed', width: '100vw', height: '105vh', background: 'rgba(0, 0, 0, 0.4)', zIndex: 14 } : { position: 'relative' }}>
			<SidebarList style={status ? { left: 0 } : { left: '-100%', }}>
				<ul>
					<li>
						<SidebardButton variant="text" fullWidth>
							<HomeIcon />
							<Typography variant='h6'>Головна</Typography>
						</SidebardButton>
					</li>
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
							<PersonOutlineOutlinedIcon />
							<Typography variant='h6'>Профіль</Typography>
						</SidebardButton>
					</li>
				</ul>
				<SidebardButton variant="text" fullWidth>
					<AccountCircleIcon style={{ fontSize: '2.2rem' }} />
					<UserInfo>
						<span style={{ fontWeight: 700, color: '#000' }}>Valentun</span>
						<span>@valentun</span>
					</UserInfo>
				</SidebardButton>
			</SidebarList>
		</div>
	)
}

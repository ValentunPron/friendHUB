import React from 'react'
import { styled } from '@mui/system';
import { Button, TextField, Typography, Link, FormControl, FormGroup, InputLabel, FilledInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { ModalBlock } from '../componets';

const Wrapper = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	height: '100vh',
	alignItems: 'center'
});

const HelloSide = styled('section')({
	flex: '0 0 50%',
	maxWidth: 500,
	margin: '0 auto'
});

const LoginSide = styled('section')({
	flex: '0 0 50%',
	maxWidth: 360,
	margin: '0 auto'
});

const HelloSideTitle = styled(Typography)({
	fontWeight: 800,
	fontSize: 42
})

const HelloSideText = styled(Typography)({
	fontSize: 28,
	marginTop: 12
})

const LoginSideTitle = styled(Typography)({
	fontSize: 30,
	fontWeight: 700,
	marginBottom: 40,
});

const LoginSideAction = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: 15,
	width: '100%',
});

const FormBottom = styled(Typography)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	'button': {
		marginLeft: 5,
		background: 'transparent',
		color: 'primary'
	}
})

const MyButton = styled(Button)({
	borderRadius: 20
});

export const SingIn: React.FC = (): React.ReactElement => {

	const [visibleModal, setVisibleModal] = React.useState<'register' | 'login' | null>(null);

	const openRegisterWindow = () => {
		setVisibleModal('register')
	}

	const openLoginWindow = () => {
		setVisibleModal('login')
	}

	const handleClose = () => {
		setVisibleModal(null);
	};

	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<Wrapper>
			<HelloSide>
				<HelloSideTitle variant='h1' color="primary">friendHUB</HelloSideTitle>
				<HelloSideText variant='h2'>FriendHUB допомагає тримати зв'язок з рідними та близькими</HelloSideText>
			</HelloSide>
			<LoginSide>
				<LoginSideTitle variant='h2'>Дізнайся актуальні новини уже сьогодні!</LoginSideTitle>
				<Typography sx={{ mb: 2 }}><b>Приєднатися до friendHUB прямо зараз!</b></Typography>
				<LoginSideAction>
					<MyButton onClick={openRegisterWindow} variant="contained" size="medium">Зареєструватися</MyButton>
					<MyButton onClick={openLoginWindow} variant="outlined" size="medium">Увійти</MyButton>
				</LoginSideAction>
			</LoginSide>
			<ModalBlock title='Створити аккаунт' onClose={handleClose} visible={visibleModal === 'register'}>
				<FormControl component='fieldset' fullWidth>
					<FormGroup aria-label='position' row>
						<TextField id="name" label="Name" variant="filled" type='email' fullWidth sx={{ mb: 2 }} />
						<TextField id="email" label="Email" variant="filled" type='email' fullWidth sx={{ mb: 2 }} />
						<FormControl fullWidth variant="filled" sx={{ mb: 3 }}>
							<InputLabel htmlFor="register-password">Password</InputLabel>
							<FilledInput
								id="register-password"
								type={showPassword ? 'text' : 'password'}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
						<MyButton variant="contained" fullWidth>Зареєструватися</MyButton>
					</FormGroup>
					<FormBottom sx={{ mt: 3, mb: 1 }} >Уже є профіль? <Link onClick={openLoginWindow} component="button" underline="none">Зайти</Link></FormBottom>
				</FormControl>
			</ModalBlock>
			<ModalBlock title='Увійти в friendHUB' onClose={handleClose} visible={visibleModal === 'login'}>
				<FormControl component='fieldset' fullWidth>
					<FormGroup aria-label='position' row>
						<TextField id="email" label="Email" variant="filled" type='email' fullWidth sx={{ mb: 2 }} />
						<FormControl fullWidth variant="filled" sx={{ mb: 3 }}>
							<InputLabel htmlFor="login-password">Password</InputLabel>
							<FilledInput
								id="login-password"
								type={showPassword ? 'text' : 'password'}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
						<MyButton variant="contained" fullWidth>Увійти</MyButton>
					</FormGroup>
					<FormBottom sx={{ mt: 3, mb: 1 }} >Не маєте профілю? <Link onClick={openRegisterWindow} component="button" underline="none">Зареєструйтеся</Link></FormBottom>
				</FormControl>
			</ModalBlock>
		</Wrapper>
	)
}

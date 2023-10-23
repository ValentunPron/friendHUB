import React from 'react'
import { styled } from '@mui/system';
import { Button, TextField, Typography, Link, FormControl, FormGroup, InputLabel, FilledInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Login, ModalBlock, Register } from '../componets';

const Wrapper = styled('div')({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: 20,
	justifyContent: 'space-between',
	height: '100vh',
	alignItems: 'center',
	'@media(max-width: 768px)': {
		gridTemplateColumns: '1fr',
		gap: 10,
	}
});

const HelloSide = styled('section')({
	maxWidth: 500,
	margin: '0 auto'
});

const LoginSide = styled('section')({
	maxWidth: 360,
	margin: '0 auto'
});

const HelloSideTitle = styled(Typography)({
	fontWeight: 800,
	fontSize: '3.2rem'
})

const HelloSideText = styled(Typography)({
	fontSize: '2rem',
	fontWeight: 500,
	marginTop: 12,
	'@media(max-width: 768px)': {
		display: 'none'
	}
})

const LoginSideTitle = styled(Typography)({
	fontSize: '2.3rem',
	fontWeight: 700,
	marginBottom: '1.25rem',
});

const LoginSideAction = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: 15,
	width: '100%',
});


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
				<Register showPassword={showPassword} handleClickShowPassword={handleClickShowPassword} toggleWindow={openLoginWindow} />
			</ModalBlock>
			<ModalBlock title='Увійти в friendHUB' onClose={handleClose} visible={visibleModal === 'login'} >
				<Login showPassword={showPassword} handleClickShowPassword={handleClickShowPassword} toggleWindow={openRegisterWindow} />
			</ModalBlock>
		</Wrapper>
	)
}

import React from 'react'
import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup'
import { Button, TextField, Typography, Link } from '@mui/material';

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
	textAlign: 'center',
	'button': {
		background: 'transparent',
		color: 'primary'
	}
})

const MyButton = styled(Button)({
	borderRadius: 20
});

function SingIn() {

	const [visibleModal, setVisibleModal] = React.useState(false);

	const handleClickOpen = () => {
		setVisibleModal(true);
	};

	const handleClose = () => {
		setVisibleModal(false);
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
					<MyButton variant="contained" size="medium">Зареєструватися</MyButton>
					<MyButton onClick={handleClickOpen} variant="outlined" size="medium">Увійти</MyButton>
				</LoginSideAction>
			</LoginSide>
			<ModalBlock title='Увійти в friendHUB' onClose={handleClose} visible={visibleModal}>
				<FormControl component='fieldset' fullWidth>
					<FormGroup aria-label='position' row>
						<TextField id="email" label="Email" variant="filled" type='email' fullWidth sx={{ mb: 2 }} />
						<TextField id="password" label="Password" variant="filled" type='password' fullWidth sx={{ mb: 3 }} />
						<MyButton variant="contained" fullWidth>Увійти</MyButton>
					</FormGroup>
					<FormBottom sx={{ mt: 3, mb: 1 }} >Не маєте профілю? <Link component="button" underline="none">Зареєструйтеся</Link></FormBottom>
				</FormControl>
			</ModalBlock>
		</Wrapper>
	)
}

export default SingIn
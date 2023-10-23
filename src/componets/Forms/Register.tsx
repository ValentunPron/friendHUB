import React from 'react';
import { styled } from '@mui/system';
import { Button, Typography, TextField, Link, FormControl, FormGroup, InputLabel, FilledInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ISingIn } from '../../types/ISingIn';
import { useForm } from 'react-hook-form';

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

export const Register: React.FC<ISingIn> = ({ showPassword, handleClickShowPassword, toggleWindow }): React.ReactElement => {

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()
	const onSubmit = (data: any) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup aria-label='position' row>
				<TextField id="name" label="Name" variant="filled" type='name' {...register("Name")} fullWidth sx={{ mb: 2 }} />
				<TextField id="email" label="Email" variant="filled" type='email' {...register("Email")} fullWidth sx={{ mb: 2 }} />
				<FormControl fullWidth variant="filled" sx={{ mb: 3 }}>
					<InputLabel htmlFor="register-password">Password</InputLabel>
					<FilledInput
						id="register-password"
						type={showPassword ? 'text' : 'password'}
						{...register("Password")}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={() => handleClickShowPassword()}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
				<MyButton variant="contained" fullWidth type='submit'>Зареєструватися</MyButton>
			</FormGroup>
			<FormBottom sx={{ mt: 3, mb: 1 }} >Уже є профіль? <Link onClick={() => toggleWindow()} component="button" underline="none">Зайти</Link></FormBottom>
		</form >
	)
}
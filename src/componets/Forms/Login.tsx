import React from 'react';
import { styled } from '@mui/system';
import { Button, Typography, TextField, Link, FormControl, FormGroup, InputLabel, FilledInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ISingIn } from '../../types/ISingIn';
import { useForm, SubmitHandler } from "react-hook-form";

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


export const Login: React.FC<ISingIn> = ({ showPassword, handleClickShowPassword, toggleWindow }): React.ReactElement => {

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()
	const onSubmit = (data: any) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)} >
			<FormGroup aria-label='position' row>
				<TextField id="email" label="Email" variant="filled" type='email' {...register("email")} fullWidth sx={{ mb: 2 }} />
				<FormControl fullWidth variant="filled" sx={{ mb: 3 }}>
					<InputLabel htmlFor="login-password">Password</InputLabel>
					<FilledInput
						id="login-password"
						type={showPassword ? 'text' : 'password'}
						{...register("password")}
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
				<MyButton variant="contained" fullWidth type='submit'>Увійти</MyButton>
			</FormGroup>
			<FormBottom sx={{ mt: 3, mb: 1 }} >Не маєте профілю? <Link onClick={() => toggleWindow()} component="button" underline="none">Зареєструйтеся</Link></FormBottom>
		</form>
	)
}
import React from 'react'
import { Grid, } from '@mui/material';
import { Sidebar } from '../componets';

export const Home: React.FC = (): React.ReactElement => {

	return (
		<section>
			<Grid container spacing={3}>
				<Grid item xs={2}>
					<Sidebar />
				</Grid>
				<Grid item xs={7}>
					Center Block
				</Grid>
				<Grid item xs={3}>
					Right Block
				</Grid>
			</Grid>
		</section>
	)
}

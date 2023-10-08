import { createTheme } from "@mui/material";

export const theme = createTheme({
	typography: {
		fontFamily: ["Roboto", "sans-serif"].join(","),
	},
	palette: {
		primary: {
			main: '#3b5998'
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1600,
		},
	},
});
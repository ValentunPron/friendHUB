import styled from '@emotion/styled';
import { Paper, OutlinedInput } from '@mui/material';

const PaperBg = styled(Paper)({
	borderRadius: 10,
	padding: 10,
	background: '#f8f9fc',
});

const SearchInput = styled(OutlinedInput)({
	borderRadius: 20,
	maxHeight: 40,
	padding: 0,
	paddingLeft: 10,
	background: '#f8f9fc',
	'svg': {
		marginRight: 5,
	},
})

export { PaperBg, SearchInput }
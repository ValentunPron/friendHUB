import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


interface IModalBlock {
	title: string;
	children: React.ReactNode;
	visible?: boolean;
	onClose: () => void;
}

export const ModalBlock: React.FC<IModalBlock> = ({ title, onClose, visible = false, children }: IModalBlock): React.ReactElement | null => {
	if (!visible) {
		return null
	}

	return (
		<Dialog
			open={visible}
			onClose={onClose}
			aria-labelledby="customized-dialog-title"
			fullWidth
			style={{ maxWidth: '560px', margin: '0 auto' }}
		>
			<DialogTitle sx={{ m: 0, p: 2 }}>
				<b>{title}</b>
				{onClose ? (
					<IconButton
						aria-label="close"
						onClick={onClose}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
							color: (theme) => theme.palette.grey[500],
						}}
					>
						<CloseIcon />
					</IconButton>
				) : null}
			</DialogTitle>
			<DialogContent dividers>
				{children}
			</DialogContent>
		</Dialog>
	)
}

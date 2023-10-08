import React from 'react'
import Menu from '@mui/material/Menu';

interface IMenu {
	anchorEl: HTMLElement | null,
	OnClose: () => void,
	visible?: boolean,
	children: React.ReactNode,
}

export const MenuBlock: React.FC<IMenu> = ({ anchorEl, OnClose, visible, children }): React.ReactElement | null => {
	if (!visible) {
		return null
	}

	return (
		<div>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={visible}
				onClose={OnClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				{children}
			</Menu>
		</div>
	)
}
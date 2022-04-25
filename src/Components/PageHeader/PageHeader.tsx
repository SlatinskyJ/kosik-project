import React, { ReactElement, useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { isNil } from 'lodash';
import { useNavigate } from 'react-router-dom';
import './PageHeader.css';

export default function (): ReactElement {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = !isNil(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (): void => {
		setAnchorEl(null);
	};
	return (
		<>
			<div className="page-header">
				<div className="page-header-name">
					<p>Sample application</p>
				</div>
				<Button
					id="basic-button"
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
				>
					Dashboard
				</Button>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
				>
					<MenuItem
						onClick={() => {
							navigate('/');
							handleClose();
						}}
					>
						Home
					</MenuItem>
					<MenuItem
						onClick={() => {
							navigate('/search');
							handleClose();
						}}
					>
						Search
					</MenuItem>
					<MenuItem
						onClick={() => {
							navigate('/about');
							handleClose();
						}}
					>
						About
					</MenuItem>
				</Menu>
			</div>
		</>
	);
}

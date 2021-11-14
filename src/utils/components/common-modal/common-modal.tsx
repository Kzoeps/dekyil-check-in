import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function BasicModal(props: {open:boolean, header?: string, description?: string, buttonText?: string, onButtonClick: () => unknown}) {
	return (
		<div>
			<Modal
				open={props.open}
				onClose={props.onButtonClick}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{props.header || 'Header here'}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{props.description || 'Description here'}
					</Typography>
					<Button
						variant="contained"
						color="primary"
						onClick={props.onButtonClick}>
						{props.buttonText || 'OK'}
					</Button>
				</Box>
			</Modal>
		</div>
	);
}

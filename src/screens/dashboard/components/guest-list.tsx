import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ColumnConfig} from '../models/models';
import humanId from 'human-id';

export default function GuestList(props: {rows: Record<string, any>[],columns: Readonly<ColumnConfig[]>}) {
	const {rows, columns} = props;
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						{columns.map((config) => (<TableCell key={config.field}>{config.display}</TableCell>))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row,index) => (
						<TableRow
							key={index}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							{columns.map((config,index) => (<TableCell key={index}>{row[config.field as string]}</TableCell>))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

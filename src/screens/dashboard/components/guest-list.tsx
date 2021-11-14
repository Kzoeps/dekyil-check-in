import {DataGrid, GridColumns, GridRowsProp} from '@mui/x-data-grid';
import * as React from 'react';

export const GuestList = (props: {rows: GridRowsProp, columns: GridColumns}) => {
	const {rows, columns} = props
	return <>
		<div style={{height: 400, width: '100%'}}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	</>;
};
export default GuestList;

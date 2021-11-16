import {Field, Form, Formik} from 'formik';
import {GenericFunction} from '../../../utils/types/models';
import * as React from 'react';
import {Button, InputAdornment} from '@mui/material';
import {TextField} from 'formik-mui';
import {Email, Lock} from '@mui/icons-material';

export const LoginForm = ({handleSubmit}: { handleSubmit: GenericFunction }) => {
	return (
		<>
			<Formik
				initialValues={{email: '', password: ''}}
				onSubmit={handleSubmit}
			>
				{({submitForm}) => (
					<Form>
						<br/>
						<br/>
						< Field component={TextField}
								required
								name="email"
								label="Email"
								variant="outlined"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<Email/>
										</InputAdornment>
									)
								}}
						/>
						<br/>
						<br/>
						<Field component={TextField}
							   required
							   type="password"
							   name="password"
							   label="Password"
							   variant="outlined"
							   InputProps={{
								   startAdornment: (
									   <InputAdornment position="start">
										   <Lock/>
									   </InputAdornment>
								   )
							   }}
						/>
						<br/><br/>
						<Button onClick={submitForm} color="primary" variant="contained">
							Login
						</Button>
					</Form>
				)}
			</Formik>
		</>
	);
};
export default LoginForm;

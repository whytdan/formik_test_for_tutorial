import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import classes from './RegisterForm.module.css';

export default function RegisterForm() {

	const [formState, setFormState] = useState({
		firstName: "",
		lastName: "",
		email: ""
	})

	const onInputChange = (e) => {
		console.log(formState)
		setFormState({
			...formState,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div>
			<form className={classes.form}>
				<h2>Register User</h2>

				<label htmlFor="firstName">
					Full Name
				</label>
				<TextField
					name="firstName"
					placeholder="First Name"
					fullWidth={true}
					variant={"outlined"}
					style={{ marginBottom: 25 }}
					onChange={onInputChange}
					value={formState.firstName}
				/>

				<label htmlFor="firstName">
					Last Name
				</label>

				<TextField
					name="lastName"
					placeholder="Last Name"
					fullWidth={true}
					variant={"outlined"}
					style={{ marginBottom: 25 }}
					onChange={onInputChange}
					value={formState.lastName}
				/>

				<label htmlFor="firstName">
					Email
				</label>

				<TextField
					name="email"
					placeholder="Email"
					fullWidth={true}
					variant={"outlined"}
					style={{ marginBottom: 25 }}
					onChange={onInputChange}
					value={formState.email}
				/>

				<Button variant="contained" color="primary">
					Register
				</Button>
			</form>
		</div>
	)
}

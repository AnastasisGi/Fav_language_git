import * as React from 'react';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import ApiCall from '../Services/ApiCall';
interface IFormValues {
	name: string;
}
type FormProps = { setInfo: Function; setDisplayResultBlock: Function };

const Form: React.FC<FormProps> = ({ setInfo, setDisplayResultBlock }) => {
	const [formValues, setFormValues] = useState<IFormValues>({ name: '' });

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, name: value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const language = await ApiCall(formValues.name);
		setInfo({ username: formValues.name, language: language });
		setDisplayResultBlock(true);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<TextField
					id="username-input"
					name="username"
					label="User Name"
					type="text"
					value={formValues.name}
					onChange={handleInputChange}
				/>
        <br></br>
        <br></br>

				<Button variant="contained" color="primary" type="submit">
					Submit
				</Button>
			</form>
		</>
	);
};
export default Form;

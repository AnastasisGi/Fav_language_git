import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
	const displayHeaderText = () => {
		return (
			<Toolbar>
				<Typography variant="h6" component="h1">
					Git Language Investigator
				</Typography>
			</Toolbar>
		);
	};

	return (
		<>
			<header>
				<AppBar sx={{ mb: 2 }} position="relative">
					{displayHeaderText()}
				</AppBar>
			</header>
		</>
	);
}

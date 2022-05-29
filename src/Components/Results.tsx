type FormProps = {
	info: { username: string; language: string };
	displayResultBlock: boolean;
};

const Results: React.FC<FormProps> = ({ info, displayResultBlock }) => {
	return displayResultBlock ? (
		<div>
			"The username is {info.username} and their favourite language is{' '}
			{info.language}"
		</div>
	) : (
		<></>
	);
};

export default Results;

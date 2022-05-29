import axios from 'axios';

const ApiCall = async (username: string) => {
	try {
		console.log('apicall started');
		const  data  = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=200`
		).then(response=>response.data)
                // console.log('DATTTA',data);
		return gatherLanguages(data);
	} catch (error) {
		console.log('error', error);
	}
};

function gatherLanguages(data: any) {
	let newArray: string[] = [];
	data.forEach((prj: any) => {
		// prj.language === null ? return : newArray.push[prj.language]
		if (prj.language === null) return;

		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		newArray.push(prj.language);
	});

	return getMostFrequent(newArray);
}

function getMostFrequent(newArray: string[]) {
	const hashmap = newArray.reduce(
		(acc: { [key: string]: number }, val: string) => {
			acc[val] = (acc[val] || 0) + 1;

			return acc;
		},
		{}
	);
	return Object.keys(hashmap).reduce((a, b) =>
		hashmap[a] > hashmap[b] ? a : b
	);
}

export default ApiCall;

import React from 'react';
import App from './App';
import mockResponseAxios from '../mocks/mockResponseAxios';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import ApiCall from './Services/ApiCall';
jest.mock('axios');
const ReactTestRenderer = require('react-test-renderer');


describe('Using the testing library of react ', () => {
	test('renders header component', () => {
		render(<App />);
		let text = screen.getByText('Git Language Investigator');
		expect(text).toBeInTheDocument();
	});
});

describe('Using the snapshot', () => {
	test('it tests that the app renders correctly  ', () => {
    const tree = ReactTestRenderer.create(<App />).toJSON();
		console.log('tree', tree);
		expect(tree).toMatchSnapshot();
	});
});

describe('Using axios mock', () => {
  test('the ApiCall returns the fav language from github call', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
		mockedAxios.get.mockImplementationOnce(() =>
			Promise.resolve(mockResponseAxios)
		);
		await expect(ApiCall('user')).resolves.toEqual('Ruby');
	});
});

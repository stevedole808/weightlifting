import axios from 'axios';

const axiosWithAuth = () => {
	const token = localStorage.getItem('token');
	return axios.create({
		baseURL: 'https://localhost5000/testAPI',
		header: {
			Authorization: token,
		},
	});
};

export default axiosWithAuth;

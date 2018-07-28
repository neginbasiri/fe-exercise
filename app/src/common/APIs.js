const ApiUtils = {
  getOptions: {
		method: 'GET',
		headers: new Headers({ accept: 'application/json' })
	},
  launchesUrl: 'http://localhost:8001/launches',
  launchpadsUrl: 'http://localhost:8001/launchpads'
};

export default ApiUtils;
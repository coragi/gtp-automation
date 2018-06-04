const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('General Endpoint - It is working! It is a Christmas miracle!');
});



router.get('/model/:texto', (req, resp) => {
	
/*
	const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	const btoa = require("btoa");
	const wml_credentials = new Map();

	wml_credentials.set("url", "https://ibm-watson-ml.mybluemix.net");
	wml_credentials.set("username", "882b8280-6620-41f0-a389-0207e3dfe7b9");
	wml_credentials.set("password", "e22e6c39-75d7-44aa-9980-46d86a042417");

	function apiGet(url, username, password, loadCallback, errorCallback) {
		const oReq = new XMLHttpRequest();
		const tokenHeader = "Basic " + btoa((username + ":" + password));
		const tokenUrl = url + "/v3/identity/token";

		oReq.addEventListener("load", loadCallback);
		oReq.addEventListener("error", errorCallback);
		oReq.open("GET", tokenUrl);
		oReq.setRequestHeader("Authorization", tokenHeader);
		oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		oReq.send();
	}

	function apiPost(scoring_url, token, payload, loadCallback, errorCallback) {
		const oReq = new XMLHttpRequest();
		oReq.addEventListener("load", loadCallback);
		oReq.addEventListener("error", errorCallback);
		oReq.open("POST", scoring_url);
		oReq.setRequestHeader("Accept", "application/json");
		oReq.setRequestHeader("Authorization", token);
		oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		oReq.send(payload);
	}


	var texto = req.params.texto;

	console.log("texto:", texto);

	apiGet(wml_credentials.get("url"),
		wml_credentials.get("username"),
		wml_credentials.get("password"),
		function (res) {
			let parsedGetResponse;
			try {
				parsedGetResponse = JSON.parse(this.responseText);
			} catch (ex) {
				// TODO: handle parsing exception
			}
			if (parsedGetResponse && parsedGetResponse.token) {
				const token = parsedGetResponse.token
				const wmlToken = "Bearer " + token;

				// NOTE: manually define and pass the array(s) of values to be scored in the next line
				const payload = '{"fields": ["DIASEMANA", "PESSOAS", "END_VISITADOS", "PROD_SEPARADOS", "CAMINHOES", "STARTSEC"], "values": [[3,8,102,92,35,79443]]}';
				const scoring_url = "https://ibm-watson-ml.mybluemix.net/v3/wml_instances/05157cd4-1ad6-48fa-9006-c079deb85823/published_models/b55fdeae-57c9-41ea-bcee-d2170cb92aaf/deployments/78a17613-e726-4512-abfb-7fca6b09c512/online";

				apiPost(scoring_url, wmlToken, payload, function (resp) {
					let parsedPostResponse;
					try {
						parsedPostResponse = JSON.parse(this.responseText);
					} catch (ex) {
						// TODO: handle parsing exception
					}
					console.log("Scoring response");
					console.log(parsedPostResponse);

					resp.setHeader('Content-Type', 'application/json');
					resp.status(200).json(this.responseText);
				}, function (error) {
					console.log(error);
				});
			} else {
				console.log("Failed to retrieve Bearer token");
			}
		}, function (err) {
			console.log(err);
		});

*/
});

module.exports = router;

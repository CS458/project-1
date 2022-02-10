import { httpConfig } from "./httpConfig";

export const httpApi = {
	delete: async (url, data, options) => makeRequest("DELETE", url, data, options),
	get: async (url, data, options) => makeRequest("GET", url, data, options),
	patch: async (url, data, options) => makeRequest("PATCH", url, data, options),
	post: async (url, data, options) => makeRequest("POST", url, data, options),
	put: async (url, data, options) => makeRequest("PUT", url, data, options),
};

const makeRequest = async (method, url, data, options) => {
	let requestBody;
	if (data) {
		if (data instanceof FormData) {
			requestBody = data;
		} else if (data !== undefined && data !== null) {
			requestBody = JSON.stringify(data);
		}
	}

	const requestOptions = {
		method,
		headers: {
			...options?.headers,
		},
		body: requestBody,
	};

	const request = new Request(`${httpConfig.baseUrl}${url}`, requestOptions);
	const response = await fetch(request);

	const contentType = response.headers.get("Content-Type");

	let responseData;

	if (contentType?.startsWith("application/json")) {
		responseData = await response.json();
	} else if (contentType?.startsWith("text/plain")) {
		responseData = await response.text();
	}

	if (!response.ok) {
		throw new HttpRequestError(response, responseData);
	}

	return {
		data: responseData,
		headers: response.headers,
		ok: response.ok,
		response: response,
		status: response.status,
		statusText: response.statusText,
	};
};

export class HttpRequestError extends Error {
	constructor(response, data) {
		super(`${response.status} (${response.statusText}) at ${response.url}`);
		this.name = "HttpRequestError";
		this.response = response;
		this.data = data;
	}
}

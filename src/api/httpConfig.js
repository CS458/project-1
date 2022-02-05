export const httpConfig = {
	baseUrl: "https://jsonplaceholder.typicode.com",
	endpoints: {
		todos: {
			get: "/todos",
			todo: (id) => `/todos/${id}`,
		},
	},
};

import { BrowserRouter } from "react-router-dom";

import { RoutesContainer } from "./routes/RoutesContainer";

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<RoutesContainer />
			</BrowserRouter>
		</div>
	);
};

export default App;

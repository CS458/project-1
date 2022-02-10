import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux";
import { RoutesContainer } from "./routes/RoutesContainer";

const App = () => {
	return (
		<Provider store={store}>
			<div className='App'>
				<BrowserRouter>
					<RoutesContainer />
				</BrowserRouter>
			</div>
		</Provider>
	);
};

export default App;

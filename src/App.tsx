import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import { Home } from "./pages/home";
import { QueryProvider } from "./contexts/QueryProvider";

import { GlobalStyle } from "./styles/global/createGlobalStyle";
import theme from "./styles/theme/theme";

import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<QueryProvider>
				<GlobalStyle />

				<Home />

				<ToastContainer />
			</QueryProvider>
		</ThemeProvider>
	);
}

export default App;

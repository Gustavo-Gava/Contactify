import { ThemeProvider } from "styled-components";
import "./App.css";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styles/global/createGlobalStyle";
import theme from "./styles/theme/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Home />

			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;

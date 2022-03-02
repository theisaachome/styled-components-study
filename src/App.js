import { ThemeProvider } from "styled-components";
import Header from "./components/Navbar";
import { Container } from "./components/styles/Container.styles";
import GlobalStyle from "./components/styles/Global";


const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333"
  }
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          <h2>Hello World</h2>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;

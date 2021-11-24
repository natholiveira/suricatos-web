import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'
import Routes from './routes'
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: 'DM Sans', sans-serif;
  }
  
`
const theme = createTheme({
    typography: {
        fontFamily: [
            'DM Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#6360ff',
            dark: '#6360ff',
            light: '#6360ff',
        },
        secondary: {
            main: '#ff8181',
            dark: '#ff8181',
            light: '#ff8181',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

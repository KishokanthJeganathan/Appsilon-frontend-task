import { Helmet } from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0rem;
	color:gray;
	background-color:#F8F8F8;
    box-sizing: border-box;
	font-family: 'Maven Pro', sans-serif;
  }

  
`;

export default function App({ Component, pageProps }) {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Helmet>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500&display=swap"
					rel="stylesheet"
				/>
			</Helmet>
			<Component {...pageProps} />
		</React.Fragment>
	);
}

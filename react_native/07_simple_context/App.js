import { StyleSheet, View } from 'react-native';
import ThemeContext,{themes} from './context/ThemeContext';
import {useState} from 'react';
import Headline from './components/Headline';
import Paragraph from './components/Paragraph';
import ThemeButton from './components/ThemeButton';

export default function App() {
	
	const [state,setState] = useState({
		theme:themes.dark
	})
	
	const toggleTheme = () => {
		if(state.theme === themes.dark) {
			setState({
				theme:themes.light
			})
		} else {
			setState({
				theme:themes.dark
			})
		}
	}
	
	return (
	<ThemeContext.Provider value={state.theme}>
		<View style={styles.container}>
			<Headline>
			Aurinkopaneelien omistaja laski, kuinka osa sähkömarkkinoiden uudistuksesta vaikuttaa häneen – ja yllättyi
			</Headline>
			<Paragraph>
			Sähkömarkkinoilla tapahtuu pian muutos, jolla on kaksi puolta.

Ensinnäkin kulutusta ja tuotantoa aletaan pian mitata vartin tarkkuudella nykyisen tunnin sijaan. Toiseksi pörssisähkön hinta vaihtelee jatkossa vartin välein.

Muutos nakertaa palan aurinkosähköä tuottavien suomalaisten säästöistä, elleivät he pysty nykyistä tarkemmin ajoittamaan sähkön kulutusta juuri niille hetkille, kun aurinko paistaa.
			</Paragraph>
			<ThemeButton toggleTheme={toggleTheme}/>
		</View>
	</ThemeContext.Provider>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

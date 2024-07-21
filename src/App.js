
import { ThemeProvider } from 'styled-components';
import { Button_2, StyledButton } from './components/Button.style';
import { GlobalStyle } from './components/GlobalStyle';
import { Wrapper } from './components/Wrapper.style';
import {theme} from './components/themes';

function App() {
  return (
    <>
   <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Wrapper>
  <StyledButton backgroundColor='blue'>Botão</StyledButton>
  <StyledButton backgroundColor='red'>Botão</StyledButton>
  <StyledButton backgroundColor='yellow'>Botão</StyledButton>
  <Button_2>Botão2</Button_2>
    <a href='#'>Clique aqui</a>
  </Wrapper>
    </ThemeProvider>
  </>

  )
}

export default App;

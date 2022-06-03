import GlobalStyle from './styles/global'
import Home from "./templates/Home"
import { ColorProvider } from './hook/useColors';

function App() {
  return (
    <ColorProvider>
      <GlobalStyle />
      <Home />
    </ColorProvider>
  )
}

export default App

import { Layout } from './components/Layout'
import { styled } from 'styled-components'

const Box = styled.div`
  background-color: #ff0;
`

function App() {

  return (
      <Layout>
        <Box>Faça o Login</Box>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" />
        <label htmlFor="password">Senha</label>
        <input id="password" type="password" />
        <button>Entrar</button>
      </Layout>
  )
}

export default App

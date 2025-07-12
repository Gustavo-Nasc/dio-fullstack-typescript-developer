import { Layout } from './components/Layout'
import { Center, Input } from '@chakra-ui/react'

function App() {

  return (
      <Layout>
        <Center>
          <h1>Faça o Login</h1>
          <Input placeholder="Email" />
          <Input placeholder="Senha" type="password" />
          <button>Entrar</button>
        </Center>
      </Layout>
  )
}

export default App

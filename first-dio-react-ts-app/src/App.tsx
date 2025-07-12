import { Layout } from './components/Layout'
import { Box, Center, Input, Button, Flex } from '@chakra-ui/react'

function App() {

  return (
      <Layout>
        <Box minHeight="vh" background="#1e192c" padding="16">
          <Flex direction="column" gap="4" padding="8" minWidth="80" maxWidth="breakpoint-xl" marginX="auto" borderRadius="l3" backgroundColor="#fff" color="#000">
            <Center>
              <h1>Faça o Login</h1>
            </Center>
            <Flex gap="4">
              <Input paddingX="2" placeholder="Email" />
              <Input paddingX="2" placeholder="Senha" type="password" />
            </Flex>
            <Button backgroundColor="#000" color="#fff" paddingX="4" paddingY="2" minWidth="80" maxWidth="80" alignSelf="end">Entrar</Button>
          </Flex>
        </Box>
      </Layout>
  )
}

export default App

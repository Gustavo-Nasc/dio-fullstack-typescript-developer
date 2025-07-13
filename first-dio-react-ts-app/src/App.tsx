import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  Highlight,
  Link,
  Stack,
  Strong,
  Text,
} from '@chakra-ui/react'
import { Layout } from './components/Layout'
import { FormLogin } from './components/FormLogin'

function App() {
  return (
    <Layout>
      <Box
        md={{
          bgPos: 'center',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          bgImage: {
            _dark:
              'linear-gradient(99.06deg, #101522 55.8%, rgba(0, 0, 0, 0) 90.54%), url(https://assets.dio.me/hIcFo_nvb9KczxKQRbZ8-CunoAnkyRHBCN0WfDTJ0M8/f:webp/q:80/L3B1YmxpYy9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaGVhZGVyL2Jhbm5lci1wbGF5LnBuZw)',
            _light:
              'linear-gradient(99.06deg, #F7F9FC 55.8%, rgba(0, 0, 0, 0) 90.54%), url(https://assets.dio.me/hIcFo_nvb9KczxKQRbZ8-CunoAnkyRHBCN0WfDTJ0M8/f:webp/q:80/L3B1YmxpYy9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaGVhZGVyL2Jhbm5lci1wbGF5LnBuZw)',
          },
        }}
      >
        <Stack
          py="12"
          gap="4"
          minH="calc(100vh - 4.25rem - 7.875rem)"
          maxW="breakpoint-xl"
          m="auto"
          md={{
            minH: 'calc(100vh - 5.25rem - 7.875rem)',
            gap: '16',
            px: '6',
            py: '16',
          }}
        >
          <Center>
            <Heading
              as="h1"
              size="2xl"
              textAlign="center"
              color={{ _dark: 'whiteAlpha.900', _light: 'blackAlpha.800' }}
            >
              <Highlight
                query="DIO Bank"
                styles={{
                  bgGradient: 'to-r',
                  gradientFrom: '#00c8ff',
                  gradientVia: '#914eff',
                  gradientTo: '#ff447e',
                  bgClip: 'text',
                }}
              >
                Bem-vindo(a) ao DIO Bank
              </Highlight>
            </Heading>
          </Center>
          <Grid
            gridTemplateColumns="repeat(1, 1fr)"
            gap="8"
            md={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '16' }}
          >
            <Stack
              as="section"
              bgPos="center"
              bgSize="cover"
              bgRepeat="no-repeat"
              p="8"
              gap="4"
              color="whiteAlpha.900"
              bgImage="linear-gradient(99.06deg, #101522 55.8%, rgba(0, 0, 0, 0) 90.54%), url(https://assets.dio.me/hIcFo_nvb9KczxKQRbZ8-CunoAnkyRHBCN0WfDTJ0M8/f:webp/q:80/L3B1YmxpYy9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaGVhZGVyL2Jhbm5lci1wbGF5LnBuZw)"
              md={{
                color: { _dark: 'whiteAlpha.900', _light: 'blackAlpha.800' },
                bgImage: 'none',
                px: '0',
              }}
            >
              <Heading as="h2" size="xl">
                Domine as suas finanças com a plataforma da DIO Bank
              </Heading>
              <Text>
                Junte-se a mais de <Strong>1 milhão de devs</Strong> da
                plataforma que buscam{' '}
                <Strong>
                  organizar as finanças e ter uma vida financeira melhor
                </Strong>
              </Text>
              <Button
                asChild
                w="max"
                bgColor="#932ed1"
                color="whiteAlpha.950"
                _hover={{ textDecoration: 'none', bgColor: '#8028bf' }}
              >
                <Link href="https://dio.me" target="_blank">
                  <Text>
                    Conheça a <Strong>DIO</Strong>
                  </Text>
                </Link>
              </Button>
            </Stack>
            <FormLogin />
          </Grid>
        </Stack>
      </Box>
    </Layout>
  )
}

export default App

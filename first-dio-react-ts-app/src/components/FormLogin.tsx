import {
  Button,
  Center,
  Grid,
  Heading,
  HStack,
  Icon,
  IconButton,
  Separator,
  Stack,
  Text,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from './Input'
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaLock,
  FaUser,
} from 'react-icons/fa6'

const loginFormSchema = z.object({
  email: z.email('E-mail inválido'),
  password: z.string().min(8, 'A senha deve conter, no mínimo, 8 caracteres'),
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  })

  function handleFormSubmit(data: LoginFormSchema) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Stack
        gap="4"
        flexDirection="column"
        px="8"
        md={{
          py: 8,
          bgColor: { _dark: 'whiteAlpha.950', _light: '#101522' },
          borderRadius: 'sm',
        }}
      >
        <Center>
          <Heading
            as="h3"
            size="lg"
            color={{
              md: { _dark: 'blackAlpha.800', _light: 'whiteAlpha.950' },
            }}
          >
            Entre na sua conta
          </Heading>
        </Center>
        <Input
          label="E-mail"
          errorMessage={errors.email?.message}
          isErrorMessage={!!errors.email}
          placeholder="Digite aqui o e-mail"
          startElement={
            <Icon
              md={{
                color: { _light: 'whiteAlpha.700', _dark: 'blackAlpha.600' },
              }}
            >
              <FaUser />
            </Icon>
          }
          value={watch('email')}
          onClear={() => setValue('email', '')}
          type="email"
          color={{ md: { _dark: 'blackAlpha.800', _light: 'whiteAlpha.950' } }}
          _placeholder={{
            md: {
              color: {
                _light: 'whiteAlpha.700',
                _dark: 'blackAlpha.600',
              },
            },
          }}
          endElementProps={{
            md: {
              _light: {
                color: 'whiteAlpha.950',
                _hover: {
                  color: 'blackAlpha.800',
                },
              },
              _dark: {
                color: 'blackAlpha.800',
                _hover: {
                  bg: 'blackAlpha.800',
                  color: 'whiteAlpha.950',
                },
              },
            },
          }}
          {...register('email')}
        />
        <Input
          label="Senha"
          errorMessage={errors.password?.message}
          isErrorMessage={!!errors.password}
          placeholder="Digite aqui a senha"
          startElement={
            <Icon
              md={{
                color: { _light: 'whiteAlpha.700', _dark: 'blackAlpha.600' },
              }}
            >
              <FaLock />
            </Icon>
          }
          value={watch('password')}
          type="password"
          color={{ md: { _dark: 'blackAlpha.800', _light: 'whiteAlpha.950' } }}
          _placeholder={{
            md: {
              color: {
                _light: 'whiteAlpha.700',
                _dark: 'blackAlpha.600',
              },
            },
          }}
          endElementProps={{
            md: {
              _light: {
                color: 'whiteAlpha.950',
                _hover: {
                  color: 'blackAlpha.800',
                },
              },
              _dark: {
                color: 'blackAlpha.800',
                _hover: {
                  bg: 'blackAlpha.800',
                  color: 'whiteAlpha.950',
                },
              },
            },
          }}
          {...register('password')}
        />
        <Button
          md={{
            bgColor: {
              _dark: 'blackAlpha.800',
              _light: 'whiteAlpha.950',
            },
            color: {
              _dark: 'whiteAlpha.950',
              _light: 'blackAlpha.800',
            },
            _hover: {
              bgColor: {
                _dark: 'blackAlpha.900',
                _light: 'whiteAlpha.700',
              },
            },
          }}
          type="submit"
        >
          Entrar
        </Button>
        <HStack>
          <Separator flex="1" />
          <Text
            flexShrink="0"
            color={{
              md: { _dark: 'blackAlpha.800', _light: 'whiteAlpha.950' },
            }}
          >
            ou
          </Text>
          <Separator flex="1" />
        </HStack>
        <Grid gridTemplateColumns="repeat(3, 1fr)" gap="4">
          <IconButton
            md={{
              bgColor: { _dark: 'blackAlpha.800', _light: 'whiteAlpha.950' },
              color: { _dark: 'whiteAlpha.950', _light: 'blackAlpha.800' },
              _hover: {
                bg: 'linear-gradient(90deg, #4285F4 0%, #EA4335 33%, #FBBC05 66%, #34A853 100%)',
                color: 'whiteAlpha.950',
              },
            }}
            aria-label="Login com Google"
          >
            <FaGoogle />
          </IconButton>
          <IconButton
            md={{
              bgColor: { _dark: 'blackAlpha.800', _light: 'whiteAlpha.950' },
              color: { _dark: 'whiteAlpha.950', _light: 'blackAlpha.800' },
              _hover: {
                bgColor: '#0068ff',
                color: 'whiteAlpha.950',
              },
            }}
            aria-label="Login com Facebook"
          >
            <FaFacebookF />
          </IconButton>
          <IconButton
            md={{
              bgColor: { _dark: 'blackAlpha.800', _light: 'whiteAlpha.950' },
              color: { _dark: 'whiteAlpha.950', _light: 'blackAlpha.800' },
              _hover: {
                bgColor: '#24292e',
                color: 'whiteAlpha.950',
              },
            }}
            aria-label="Login com GitHub"
          >
            <FaGithub />
          </IconButton>
        </Grid>
      </Stack>
    </form>
  )
}

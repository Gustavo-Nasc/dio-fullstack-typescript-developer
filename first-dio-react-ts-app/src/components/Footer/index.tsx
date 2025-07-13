import { Center, Flex, Grid, Icon, Span, Text } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa6'
import { BsInstagram, BsLinkedin, BsDiscord, BsGithub } from 'react-icons/bs'
import { ButtonSocialMedia } from './components/ButtonSocialMedia'

export function Footer() {
  return (
    <Flex flexDirection="column" bg="#1e192c" py="4" gap="4">
      <Center>
        <Text color="whiteAlpha.900">
          Made with love{' '}
          <Icon color="tomato">
            <FaHeart />
          </Icon>{' '}
          by{' '}
          <Span
            textDecoration="underline"
            textUnderlineOffset="0.25rem"
            fontWeight="bold"
          >
            Gustavo Souza
          </Span>
        </Text>
      </Center>
      <Center>
        <Grid gap="4" templateColumns="repeat(4, 1fr)" maxW="max-content">
          <ButtonSocialMedia
            href="https://www.instagram.com/gustanascsouza/"
            icon={<BsInstagram />}
            _hover={{
              bg: 'transparent',
              bgGradient: 'to-br',
              gradientFrom: '#feda75',
              gradientVia: ['#fa7e1e, #d62976, #962fbf'],
              gradientTo: '#4f5bd5',
            }}
          />
          <ButtonSocialMedia
            href="https://www.linkedin.com/in/gustanascsouza/"
            icon={<BsLinkedin />}
            _hover={{
              bg: '#0a66c2',
            }}
          />
          <ButtonSocialMedia
            href="https://github.com/Gustavo-Nasc"
            icon={<BsGithub />}
            _hover={{
              bg: '#24292e',
            }}
          />
          <ButtonSocialMedia
            href="https://discordapp.com/users/gustanascsouza"
            icon={<BsDiscord />}
            _hover={{
              bg: '#5865f2',
            }}
          />
        </Grid>
      </Center>
    </Flex>
  )
}

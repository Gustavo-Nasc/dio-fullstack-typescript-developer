import { Box, Flex, Span } from '@chakra-ui/react'
import { ColorModeButton } from './ui/color-mode'
import { Logo } from './Logo'

export function Header() {
  return (
    <Box
      as="header"
      _light={{ backgroundColor: '#eaeaea' }}
      _dark={{ backgroundColor: '#151515' }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW="breakpoint-xl"
        mx="auto"
        p="4"
        md={{ p: '6' }}
      >
        <Flex alignItems="center">
          <Logo w="12" h="max" md={{ w: '16' }} />
          <Span
            textTransform="uppercase"
            fontWeight="bold"
            md={{ fontSize: '2xl' }}
            _light={{
              color: 'blackAlpha.800',
            }}
            _dark={{
              color: 'whiteAlpha.900',
            }}
          >
            Bank
          </Span>
        </Flex>
        <ColorModeButton variant="ghost" />
      </Flex>
    </Box>
  )
}

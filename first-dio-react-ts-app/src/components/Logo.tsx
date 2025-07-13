import { Image } from '@chakra-ui/react'
import { useColorMode } from './ui/color-mode'
import logoDark from '/logo-dark.png'
import logoWhite from '/logo-white.png'
import { type ImageProps } from '@chakra-ui/react'

type LogoProps = ImageProps

export function Logo({ ...props }: LogoProps) {
  const { colorMode } = useColorMode()

  return (
    <>
      {colorMode === 'dark' ? (
        <Image
          src={logoDark}
          alt="logo digital innovation one na cor branca"
          {...props}
        />
      ) : (
        <Image
          src={logoWhite}
          alt="logo digital innovation one com degradê de azul claro para rosa"
          {...props}
        />
      )}
    </>
  )
}

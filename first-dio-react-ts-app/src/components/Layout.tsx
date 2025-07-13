import { Box } from '@chakra-ui/react'
import { Footer } from './Footer'
import { Header } from './Header.tsx'
import { type ReactNode } from 'react'

type LayoutProps = {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Box bg={{ _light: '#F7F9FC', _dark: '#101522' }}>{children}</Box>
      <Footer />
    </>
  )
}

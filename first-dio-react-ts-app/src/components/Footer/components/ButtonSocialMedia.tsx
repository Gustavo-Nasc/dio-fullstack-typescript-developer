import { Button, Icon, Link, type ButtonProps } from '@chakra-ui/react'
import type { ReactNode } from 'react'

type ButtonSocialMediaProps = ButtonProps & {
  icon: ReactNode
  href: string
}

export function ButtonSocialMedia({
  icon,
  href,
  ...props
}: ButtonSocialMediaProps) {
  return (
    <Button
      asChild
      variant="outline"
      p="4"
      h="max-content"
      borderRadius="full"
      transitionDuration="slowest"
      color="whiteAlpha.800"
      borderColor="whiteAlpha.800"
      _light={{
        _hover: { color: 'whiteAlpha.950', border: 'none' },
      }}
      _dark={{
        _hover: { color: 'whiteAlpha.950', border: 'none' },
      }}
      {...props}
    >
      <Link href={href} target="_blank">
        <Icon>{icon}</Icon>
      </Link>
    </Button>
  )
}

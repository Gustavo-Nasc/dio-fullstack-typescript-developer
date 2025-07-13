import {
  Field,
  type InputProps as InputUIProps,
  Input as InputUI,
  InputGroup,
  CloseButton,
  type IconButtonProps,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { PasswordInput } from './ui/password-input'

type InputProps = InputUIProps & {
  label: string
  errorMessage?: string
  isErrorMessage?: boolean
  startElement?: ReactNode
  value?: string
  endElementProps?: IconButtonProps
  onClear?: () => void
}

export function Input({
  startElement,
  label,
  errorMessage,
  value,
  onClear,
  isErrorMessage,
  type,
  color,
  endElementProps,
  ...props
}: InputProps) {
  const showClearButton = !!value && !!onClear

  const endElement = showClearButton ? (
    <CloseButton size="xs" onClick={onClear} me="-2" {...endElementProps} />
  ) : undefined

  return (
    <Field.Root invalid={!!isErrorMessage}>
      <Field.Label
        color={
          color ? color : { _dark: 'whiteAlpha.900', _light: 'blackAlpha.800' }
        }
      >
        {label}
      </Field.Label>
      <InputGroup startElement={startElement} endElement={endElement}>
        {type === 'password' ? (
          <PasswordInput
            color={color}
            {...props}
            endElementProps={endElementProps}
          />
        ) : (
          <InputUI color={color} {...props} />
        )}
      </InputGroup>
      <Field.ErrorText>{errorMessage}</Field.ErrorText>
    </Field.Root>
  )
}

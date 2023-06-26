import { forwardRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { Container } from './styles'

export const Input = forwardRef<TextInput, TextInputProps>(
  ({ ...props }, ref) => {
    return <Container {...props} ref={ref} />
  },
)

Input.displayName = 'Input'

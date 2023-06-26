import { forwardRef } from 'react'
import { TextInput } from 'react-native'
import { MaskedTextInputProps } from 'react-native-mask-text'
import { Container } from './styles'

export const InputMask = forwardRef<TextInput, MaskedTextInputProps>(
  ({ ...props }, ref) => {
    return <Container {...props} ref={ref} />
  },
)

InputMask.displayName = 'InputMask'

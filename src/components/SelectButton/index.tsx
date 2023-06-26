import { Circle } from 'phosphor-react-native'
import { forwardRef } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components'
import { Container, Label } from './styles'

type SelectButtonProps = TouchableOpacityProps & {
  variant: 'yes' | 'no'
  isSelected: boolean | undefined
}

export const SelectButton = forwardRef<TouchableOpacity, SelectButtonProps>(
  ({ isSelected, variant, ...props }, ref) => {
    const theme = useTheme()

    return (
      <Container isSelected={isSelected} variant={variant} {...props} ref={ref}>
        <Circle
          weight="fill"
          size={8}
          color={
            variant === 'yes' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
          }
        />
        <Label>{variant === 'yes' ? 'Sim' : 'Não'}</Label>
      </Container>
    )
  },
)

SelectButton.displayName = 'SelectButton'

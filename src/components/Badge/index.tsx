import { Circle } from 'phosphor-react-native'
import { useTheme } from 'styled-components'
import { Container, Label } from './styles'

type BadgeProps = {
  status: boolean
}

export function Badge({ status }: BadgeProps) {
  const theme = useTheme()
  return (
    <Container>
      <Circle
        size={14}
        color={status ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}
        weight="fill"
      />
      <Label>{status ? 'dentro da dieta' : 'fora da dieta'}</Label>
    </Container>
  )
}
